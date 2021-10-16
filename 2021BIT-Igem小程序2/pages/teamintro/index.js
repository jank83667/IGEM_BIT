Page({

   
  data: {
    tp1:"https://s3.bmp.ovh/imgs/2021/09/494c02f5ee263947.png",
    //轮播图数组
     banners:["https://s3.bmp.ovh/imgs/2021/08/87103c4a58a810d7.jpg","https://s3.bmp.ovh/imgs/2021/09/79fa7ccf48c8a3cd.jpg"],
     tabs:[
       {
         id:0,
         value:"BIT队伍",
         isActive:true
       },
       {
        id:1,
        value:"YiYe队伍",
        isActive:false
      }
      ]
  },

  //页面开始加载 就会触发
  onLoad: function (options) {
    
     
      },
  //标题点击事件
  handleTabsItemChange(e){
    //获取被点击标题索引
    const{index}=e.detail;
    let{tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }

   
})