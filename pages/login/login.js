
let app = getApp();
Page({
  data:{
   phone:0,
   name:''
  },
  fetchCode:function(e){
    console.log(this.data.phone)
    let mobileReg = /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
    if (mobileReg.test(this.data.phone)) {
      wx.showToast({
        title: '绑定成功',
        duration: 1000
      })
      getApp().phone = this.data.phone;
      this.geren();
    }
    else{
      wx.showToast({
        title: '手机号格式不对',
        duration: 2000
      })
    }  
  },
  geren:function(){
    wx.reLaunch({     //跳转至指定页面并关闭其他打开的所有页面（这个最好用在返回至首页的的时候）
      url: '/pages/profile/profile'
    })
  },
  getPhone:function(e){
    this.setData({
      phone: e.detail.value
    });     
  },
  getName: function (e) {
    this.setData({
      name: e.detail.value
    });
    getApp().name = this.data.name;
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

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