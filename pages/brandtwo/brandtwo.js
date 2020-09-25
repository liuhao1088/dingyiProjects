// pages/brandone/brandone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/112987/16/18584/743177/5f6d5f80Ec2b49a0a/da61bad36af12bd8.jpg',
      'https://s1.ax1x.com/2020/09/15/w6ExmR.md.jpg',
      'https://img10.360buyimg.com/ddimg/jfs/t1/115298/12/19148/1094071/5f6daab9Edd0f4f92/6d281f09dc0f699e.jpg',
      'https://s1.ax1x.com/2020/09/15/w6V09U.md.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    top:"4%"
  },
  fnckdj: function (e) {
    wx.navigateTo({
      url: "../fengniaoguoji/fengniaoguoji"
    })
  } ,
  fanhuidj:function(){
    wx.reLaunch({
       url: "../index/index"
     })
 },

 zhuyefanhuidj:function(){
  wx.reLaunch({
     url: "../index/index"
   })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    console.log(windowHeight);
    if(windowHeight>800){
      this.setData({
        top: "6%"
      })
    }else{
      this.setData({
        top: "4%"
      })
    }
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