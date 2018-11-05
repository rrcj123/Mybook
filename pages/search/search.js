// pages/search/search.js
var cid=1;
var pno=1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appurl: "",
    bookClass:[],
    bookList:[],
    cid:"",
    last:true,
    pageCount:0, 
    tupian:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.cid != undefined) cid = options.cid;
    wx.request({
      url: getApp().url + '/book/classify',
      method: "GET",
      success: (res) => {
        this.setData({
          bookClass: res.data.msg,
          appurl: getApp().url,
          tupian: res.data.msg[cid].cover_url
          
        })
      },
    })
    this.onBookList();
  },
  //加载图书
  onBookList: function(){
    wx.request({
      url: getApp().url + '/book/list?cid='+cid+'&pno='+pno,
      method: "GET",
      success: (res) => {
        var _this=this;
        this.setData({
          bookList: _this.data.bookList.concat(res.data.msg.data),
          cid:cid,
          pageCount: res.data.msg.pageCount,
          tupian: this.data.bookClass[cid-1].cover_url
        })
      },
    })
  },
  /*改变图书分类*/
  onBookCid:function(event){
    cid=event.currentTarget.dataset.cid;
    pno=1;
    this.setData({
      last: true,
    })
    this.data.bookList=[];
    this.onBookList()
  },
  onbookdetail:function(e){
    wx.navigateTo({
      url: '../bookdetail/bookdetail?bid=' + e.currentTarget.dataset.bid,
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
    if (pno < this.data.pageCount-1) {
      pno++
      this.onBookList();
    }
    if (pno == this.data.pageCount-1){
      this.setData({
        last: false
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})