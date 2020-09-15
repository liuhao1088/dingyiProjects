// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  height:""+"rpx",
     active: 0,
     indicatorDots: true,
     autoplay: true,
     interval: 3000,
     duration: 1000
  },
//   onChange(event) {
//    wx.showToast({
//      title: `切换到标签 ${event.detail.name}`,
//      icon: 'none',
//    });
//  },
   wenzhangdjone:function(){
      wx.navigateTo({
         url: "../wenzhangxiangxingone/wenzhangxiangxingone"
       })
   },
   wenzhangdjtwo:function(){
    wx.navigateTo({
       url: "../wenzhangxiangxingtwo/wenzhangxiangxingtwo"
     })
 },
   fnckdj: function (e) {
    wx.navigateTo({
      url: "../fengniaoguoji/fengniaoguoji"
    })
  } ,
  brandone: function (e) {
    wx.navigateTo({
      url: "../brandone/brandone"
    })
  } ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  var windowHeight = wx.getSystemInfoSync().windowHeight;
    //  console.log(windowHeight);
    //   this.setData({
    //    height:windowHeight
    //  })
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