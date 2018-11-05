// pages/profile/profile.js
Page({
  data: {
    avatar: "",
    names: "",
    flag: false,
    result: "",
    phone:'',
    name:''
    
  },
  bindGetUserInfo: function (e) { 
    getApp().flag = !getApp().flag;
    var that = this
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      getApp().touxiang=e.detail.userInfo.avatarUrl,
      getApp().weixinname = e.detail.userInfo.nickName
      that.setData({
        avatar: getApp().touxiang,
        names: getApp().weixinname,
        flag: getApp().flag
      })
      wx.showToast({
        title: '登录成功',
        icon: 'success',
      })
    }
  },
  signout: function () {
    getApp().flag = !getApp().flag;
    getApp().touxiang = '';
    getApp().weixinname = '';
    this.setData({
      flag: getApp().flag
    })
    wx.showToast({
      title: '退出成功',
      icon: 'success',
    })
  },
  onLoad: function (options) {
    console.log(getApp().phone)
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      phone:getApp().phone,
      name: getApp().name,
      flag: getApp().flag,
      avatar: getApp().touxiang,
      names: getApp().weixinname, 
    })   
  },
})