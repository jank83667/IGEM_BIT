// pages/page3/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      button1:true,
      button2:false,
      button3:false,
      button4:false,
      button5:false,
      button6:false,
      button7:false,
      canvas:false
  },

  Button1(){
    this.setData({
      button1: false,
      button2:true
    })
  },
  Button2(){
    this.setData({
      button2: false,
      button3:true
    });
    var that = this
    setTimeout(function () {
      that.setData({
        button3: false,
        button4:true
      })//要延时执行的代码

     }, 1000) //延迟时间 这里是1秒
    
  },
  Button3(){
    this.setData({
      button3: false,
    }),
    wx.switchTab({
      url : '../result/index' ,
   })
  }
})