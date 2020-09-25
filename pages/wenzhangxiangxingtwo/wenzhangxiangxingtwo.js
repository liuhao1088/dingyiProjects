// pages/wenzhangxiangxingtwo/wenzhangxiangxingtwo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"4%",
    imgArr:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/150454/1/616/117231/5f5f1556E4c5f239f/fecf117aa9d828ab.jpg'
    ],
    imgArr2:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/146989/18/8345/335230/5f5f1604E6021b6de/3a907d2699f689a0.png'
    ],
    imgArr3:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/115619/4/17633/178878/5f5f164dEcf4c8831/bc866dbe4fbeebf3.png'
    ],
    imgArr4:[
      'https://img12.360buyimg.com/ddimg/jfs/t1/150943/15/617/257364/5f5f16adE90c8f511/d43c2a470f719b8b.jpg'
    ],
    imgArr5:[
      'https://img11.360buyimg.com/ddimg/jfs/t1/149662/24/8372/250414/5f5f16f9Eaaa061a7/4c7cd794e027e1ab.png'
    ],
    imgArr6:[
      'https://img10.360buyimg.com/ddimg/jfs/t1/116415/15/17580/1064848/5f5f1745E56b68e8b/8f684a1123506157.png'
    ],
    imgArr7:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/121473/39/12587/604666/5f5f17caEfacb8b4b/82b4f80cab3241bb.png'
    ],
    imgArr8:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/145183/28/8294/230265/5f5f1820E48444848/754b8b04ee34d559.jpg'
    ],
    imgArr9:[
      'https://img10.360buyimg.com/ddimg/jfs/t1/132253/21/9848/229548/5f5f187dEb51ed8c2/ddd584e158621a9d.jpg'
    ],
    imgArr10:[
      'https://img12.360buyimg.com/ddimg/jfs/t1/129800/28/9979/91230/5f5f18ceE334e010b/22df5cd99fe43467.png'
    ],
    imgArr11:[
      'https://img12.360buyimg.com/ddimg/jfs/t1/115644/33/17783/78026/5f5f1918Efb296b8b/be2e34135a53bd7b.png'
    ],
  },
  fanhuidj:function(){
    wx.reLaunch({
       url: "../details/details"
     })
 },

 zhuyefanhuidj:function(){
  wx.reLaunch({
     url: "../index/index"
   })
},
fnckdj: function (e) {
  wx.navigateTo({
    url: "../fengniaoguoji/fengniaoguoji"
  })
} ,

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
    wx.showShareMenu({

      withShareTicket:true,
      
      menus:['shareAppMessage','shareTimeline']
      
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