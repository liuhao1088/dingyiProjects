// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
      'https://img10.360buyimg.com/ddimg/jfs/t1/124856/8/12620/935208/5f6097f6Efbe75dc7/68a28f980178cf14.jpg',
      'https://s1.ax1x.com/2020/09/15/w6ExmR.md.jpg',
      'https://img10.360buyimg.com/ddimg/jfs/t1/115298/12/19148/1094071/5f6daab9Edd0f4f92/6d281f09dc0f699e.jpg',
      'https://s1.ax1x.com/2020/09/15/w6V09U.md.jpg'
    ],
    selectList: [
      'https://img12.360buyimg.com/ddimg/jfs/t1/147855/20/8397/222352/5f6098afE744576c0/f33a2ffe2a346296.jpg',
      'https://img13.360buyimg.com/ddimg/jfs/t1/140040/32/9057/122433/5f6d5ef8E52c0105c/5fd42ea6e737df6c.jpg',
      'https://img13.360buyimg.com/ddimg/jfs/t1/149092/31/8423/238904/5f609907E15caf54e/14849a58988bac50.jpg'
    ],
    articleList: [{
      img: 'https://img14.360buyimg.com/ddimg/jfs/t1/134113/10/9950/101232/5f609a16Eaa25f1e6/aa22982c9ba93cdd.png',
      title: '破除行业寒冰，引领创富之路丨鼎易乐平战役拉开江西首战'
    }, {
      img: 'https://img10.360buyimg.com/ddimg/jfs/t1/147949/18/8430/89297/5f609b0bEda322c46/4d8ff55a3b485dec.png',
      title: '致敬新时代，探索LED灯照明新未来'
    }, ],
    productList: ''
  },

  toDetails(e) {
    let id = e.currentTarget.id;
    if (parseInt(id) === 0) {
      wx.navigateTo({
        url: '../productDetails/productDetails?details=' + JSON.stringify(this.data.productList[0]),
      })
    } else if (parseInt(id) === 1) {
      wx.navigateTo({
        url: '../productDetails/productDetails?details=' + JSON.stringify(this.data.productList[1]),
      })
    } else {
      wx.navigateTo({
        url: '../productDetails/productDetails?details=' + JSON.stringify(this.data.productList[2]),
      })
    }
  },

  toArticle(e) {
    let id = e.currentTarget.id;
    if (parseInt(id) === 0) {
      wx.navigateTo({
        url: "../wenzhangxiangxingone/wenzhangxiangxingone"
      })
    } else {
      wx.navigateTo({
        url: "../wenzhangxiangxingtwo/wenzhangxiangxingtwo"
      })
    }
  },



  wenzhangdjone: function () {

  },
  wenzhangdjtwo: function () {

  },
  fnckdj: function (e) {
    wx.navigateTo({
      url: "../fengniaoguoji/fengniaoguoji"
    })
  },


  detailsdj: function (e) {
    wx.navigateTo({
      url: "../details/details"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.cloud.callFunction({
      name: 'productList'
    }).then(res => {
      console.log(res.result)
      let productList = res.result;
      that.setData({
        productList
      })
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
    wx.showShareMenu({

      withShareTicket: true,

      menus: ['shareAppMessage', 'shareTimeline']

    })
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