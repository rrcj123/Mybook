// pages/sign/sign.js
Page({
  data:{
    introduce:[],
    name:'',
    phone:0
  },
  onLoad:function(options){
    console.log(getApp().name)
    if (!getApp().name){
      wx.showToast({
        title: '请先完善信息',
        duration: 2000
      })
    }
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: getApp().url + '/activity/introduce?pid=' + options.pid,
      method: "GET",
      success: (res) => {
        this.setData({
          introduce: res.data.msg,
          name:getApp().name,
          phone:getApp().phone
        })
      }
    })
  },
  geren:function(){
    wx.reLaunch({     //跳转至指定页面并关闭其他打开的所有页面（这个最好用在返回至首页的的时候）
      url: '/pages/profile/profile'
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