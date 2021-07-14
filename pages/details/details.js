// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [{
        img: 'https://img14.360buyimg.com/ddimg/jfs/t1/134113/10/9950/101232/5f609a16Eaa25f1e6/aa22982c9ba93cdd.png',
        title: '开拓富饶沃土，征战华夏第一城，鼎易襄阳品牌财富峰会！'
      },
      {
        img: 'https://img11.360buyimg.com/ddimg/jfs/t1/125740/17/16236/120203/5f962749E12086e41/8513320fac2ed57e.png',
        title: '你还在担心换车灯过不了年审吗'
      },
      {
        img: 'https://img13.360buyimg.com/ddimg/jfs/t1/147440/25/12144/98810/5f962291E19729b6b/a64343728de310c1.png',
        title: '氙气灯终结者，夜精灵超能解码王V12凭什么？！'
      },
      {
        img: 'https://img14.360buyimg.com/ddimg/jfs/t1/134113/10/9950/101232/5f609a16Eaa25f1e6/aa22982c9ba93cdd.png',
        title: '鼎易品牌财富峰会，谱写续章，辉煌安徽'
      },
      {
        img: 'https://img14.360buyimg.com/ddimg/jfs/t1/134113/10/9950/101232/5f609a16Eaa25f1e6/aa22982c9ba93cdd.png',
        title: '破除行业寒冰，引领创富之路丨鼎易乐平战役拉开江西首战'
      },
      {
        img: 'https://img10.360buyimg.com/ddimg/jfs/t1/147949/18/8430/89297/5f609b0bEda322c46/4d8ff55a3b485dec.png',
        title: '致敬新时代，探索LED灯照明新未来'
      },
      {
        img: 'https://img14.360buyimg.com/ddimg/jfs/t1/134113/10/9950/101232/5f609a16Eaa25f1e6/aa22982c9ba93cdd.png',
        title: '勇攀高峰，登顶光明|鼎易再战安徽“珍珠城”'
      },
      {
        img: 'https://img14.360buyimg.com/ddimg/jfs/t1/134113/10/9950/101232/5f609a16Eaa25f1e6/aa22982c9ba93cdd.png',
        title: '霸者重返，光明降临|鼎易再战山东临沂！'
      },
    ]
  },

  toArticle(e) {
    let id = e.currentTarget.id;
    if (parseInt(id) === 0) {
      wx.navigateTo({
        url: "../wenzhangxiangxingsix/wenzhangxiangxingsix"
      })
    } else if (parseInt(id) === 1) {
      wx.navigateTo({
        url: "../wenzhangxiangxingseven/wenzhangxiangxingseven"
      })
    } else if (parseInt(id) === 2) {
      wx.navigateTo({
        url: "../wenzhangxiangxingeight/wenzhangxiangxingeight"
      })
    } else if (parseInt(id) === 3) {
      wx.navigateTo({
        url: "../wenzhangxiangxingfives/wenzhangxiangxingfives"
      })
    } else if (parseInt(id) === 4) {
      wx.navigateTo({
        url: "../wenzhangxiangxingone/wenzhangxiangxingone"
      })
    } else if (parseInt(id) === 5) {
      wx.navigateTo({
        url: "../wenzhangxiangxingtwo/wenzhangxiangxingtwo"
      })
    } else if (parseInt(id) === 6) {
      wx.navigateTo({
        url: "../wenzhangxiangxingfour/wenzhangxiangxingfour"
      })
    } else {
      wx.navigateTo({
        url: "../wenzhangxiangxingthree/wenzhangxiangxingthree"
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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