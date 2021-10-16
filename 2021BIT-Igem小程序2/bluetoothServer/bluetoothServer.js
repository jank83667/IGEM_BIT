// pages/bluetoothServer/bluetoothServer.js
const app = getApp()

function inArray(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return i;
    }
  }
  return -1;
}

// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}

Page({
  data: {
    items: [
      { name: '步长：1', value: 1},
      { name: '步长：5', value: 5},
      { name: '步长：20', value: 20},
      { name: '步长：100', value: 100 }, //单选列表
    ],
    seletedStr : ""
  },

  radioChange : function (event) {
    this.setData({
      seletedStr: event.detail.value //获取选中数据
    });
    console.log('radio发生change事件，携带value值为：', this.data.seletedStr)
  },
  writeBLECharacteristicValue(value) {value
    // 向蓝牙设备发送一个16进制数据
    let buffer = new ArrayBuffer(value)
    let dataView = new DataView(buffer)
    dataView.setUint8(0, Math.random() * 255 | 0)
    wx.writeBLECharacteristicValue({
      deviceId: this._deviceId,
      serviceId: this._deviceId,
      characteristicId: this._characteristicId,
      value: buffer,
    })
  },
})
