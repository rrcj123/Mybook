// pages/index/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookclass:[],
    lunbo:[], 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: getApp().url + '/book/classify',
      method: "GET",
      success: (res) => {
        this.setData({
          bookclass: res.data.msg,
          
        })
      },
    }),
    wx.request({
      url: getApp().url + '/book/lunbo',
      method: "GET",
      success: (res) => {
        this.setData({
          lunbo: res.data.msg
        })
      },
    })
  },
  onBookCid:function(event){
    wx.reLaunch({     //跳转至指定页面并关闭其他打开的所有页面（这个最好用在返回至首页的的时候）
      url: '/pages/search/search?cid='+event.currentTarget.dataset.cid
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})