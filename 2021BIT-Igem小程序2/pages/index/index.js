// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Welcom to IGEM',
    logo: 'https://s3.bmp.ovh/imgs/2021/08/87103c4a58a810d7.jpg'
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  takePhoto()
  {	
    wx.navigateTo
    ({
      url: '/pages/page2/page2',	//跳转
    })
  },
})
