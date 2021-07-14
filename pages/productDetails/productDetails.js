// pages/productDetails/productDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let details = JSON.parse(options.details);
    let index = details.index;
    console.log(index)

    if (parseInt(index) === 0) {
      wx.setNavigationBarTitle({
        title: '氙气灯终结者'
      })
    } else if (parseInt(index) === 1) {
      wx.setNavigationBarTitle({
        title: '百变安装'
      })
    } else {
      wx.setNavigationBarTitle({
        title: '小夜精灵'
      })
    }

    this.setData({
      details
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