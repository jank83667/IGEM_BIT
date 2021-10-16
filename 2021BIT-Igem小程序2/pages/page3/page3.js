// pages/page3/page3.js
var ctx = wx.createCanvasContext('myCanvas');//通过api函数创建Canvas的绘图上下文
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
      canvas:true
    }),
    this.start_draw();
    setTimeout(function () {
      // wx.redirectTo({
      // url: '../index/index'
      // })
      //navigateTo
      wx.reLaunch({
      url: '../page4/page4'
      })
      }, 8000)

  },

  start_draw(){
    this.drawSinX();  //调用绘制曲线函数
    this.draw();
  },
  drawDot: function(x, y) { //自定义函数，绘制实心圆点
    ctx.arc(x, 500-y, 1, 0, 2 * Math.PI) //绘制圆形
    ctx.setFillStyle('green') //设置填充样式
    ctx.fill()//填充
    ctx.draw(true)//保留以前绘制
  },
  drawSinX: function() {  //自定义函数，绘制曲线
    for (var x = 0; x < 50; x += 0.5) { //利用x坐标循环， 每隔一度就绘制一个点，这样绘制出的点比较密集
      var y = 9*x;  //根据x坐标求y坐标值
      this.drawDot( -1+x,  y);  //调用绘制实心点绘制曲线
    }
  },
   draw() {
    var width, ratioX, ratioY, maxY, stepY,height = 300;
    var newArr = new Array();
  
    // ---------- 获取屏宽 ---------------
    wx.getSystemInfo({
      success: function (res) {
        width = res.windowWidth;
      }
    })
    ratioX = parseInt((width - 60) / 1);
    ratioY = parseInt((height - 45) / 6);
  
    // ------- 绘制坐标线 ------
    ctx.beginPath();
    for (var i = 0; i < 5; i++) {
      ctx.save();
      ctx.setStrokeStyle("#dde2e3");
      ctx.setFillStyle("#848198");
      ctx.setFontSize('8');
      ctx.fillText(i * stepY, 0, 220 - i * ratioY);
      ctx.moveTo(22, 215 - i * ratioY);
      ctx.lineTo((width - 30), 215 - i * ratioY);
      ctx.stroke();
      ctx.restore();
    }
  
    // ------ 绘制横坐标 ------
    for (var i = 0; i < 100; i++) {
      ctx.save();
      ctx.translate(15, 215);
      ctx.setFontSize('8');
      ctx.setFillStyle('#848198');
      ctx.fillText(i, i * (ratioX), 20);
      ctx.restore();
    }

    ctx.draw(true);
  }
})