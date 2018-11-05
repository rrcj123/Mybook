// pages/bookdetail/bookdetail.js
Page({
  data:{
    appurl: "",
    bookDetail:[],
    shoucang:0
  },
  onLoad: function (options){

    wx.request({
      url: getApp().url + '/book/details?bid='+options.bid,
      method:"GET",
      success:(res)=>{
        this.setData({
          appurl:getApp().url,
          bookDetail: res.data.msg,
          shoucang: res.data.msg.shoucang  
        })
      }  
    })
  },
  onshoucang(){
    this.setData({
      shoucang: (this.data.shoucang + 1) % 2
    })
     wx.request({ 
       url: getApp().url + '/book/addshoucang?bid=' + this.options.bid + '&shoucang=' + this.data.shoucang,
       method: "GET",
       success: (res) => {  

       }
     })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})