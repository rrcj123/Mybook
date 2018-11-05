// pages/bookstore/bookstore.js
Page({
  data: {
    appurl: "",
    bookList: [],
    shanchu:false,
  },
  onLoad: function (options) {
    wx.request({
      url: getApp().url + '/book/shoucang',
      method: "GET",
      success: (res) => {
        this.setData({
          appurl: getApp().url,
          bookList: res.data.msg,
          shanchu:false,
        })
      }
    })
  },
  handleLongPress:function(){
    this.setData({
      shanchu: true
    })     
  },
  xiangqin:function(e){
    wx.navigateTo({
      url: '../bookdetail/bookdetail?bid=' + e.currentTarget.dataset.bid,
    })
  },
  shanchu:function(e) {
    wx.request({
      url: getApp().url + '/book/addshoucang?bid=' + e.target.dataset.bid ,
      method: "GET",
      success: (res) => {
    
      }
    })
    console.log(e.target.dataset.index);
    var array = [];
    for (var i = 0; i < this.data.bookList.length; i++) {
      if (i != e.target.dataset.index) {
        array.push(this.data.bookList[i]);
      }
    }
    this.setData({
      bookList: array
    })
  },
  quxiaoshanchu:function(){
    this.setData({
      shanchu: false
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
  