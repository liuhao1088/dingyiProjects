// pages/wenzhangxiangxingone/wenzhangxiangxingone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"4%",
    imgArr:[
      'https://s1.ax1x.com/2020/09/14/wBjp1e.jpg'
    ],
    imgArr2:[
      'https://s1.ax1x.com/2020/09/14/wBjBH1.md.jpg'
    ],
    imgArr3:[
      ' https://s1.ax1x.com/2020/09/14/wBvAKJ.md.jpg'
    ],
    imgArr4:[
      'https://s1.ax1x.com/2020/09/14/wD98E9.md.jpg'
    ],
    imgArr5:[
      'https://s1.ax1x.com/2020/09/14/wD9vb4.md.jpg'
    ],
    imgArr6:[
      'https://s1.ax1x.com/2020/09/14/wDCVqe.jpg'
    ],
    imgArr7:[
      'https://s1.ax1x.com/2020/09/14/wDC8sS.png'
    ],
    imgArr8:[
      'https://s1.ax1x.com/2020/09/14/wDPkYn.jpg'
    ],
    imgArr9:[
      'https://s1.ax1x.com/2020/09/14/wDPZlV.jpg'
    ],
    imgArr10:[
      'https://s1.ax1x.com/2020/09/14/wDP1YR.md.jpg'
    ],
    imgArr11:[
      'https://s1.ax1x.com/2020/09/14/wDPJl6.jpg'
    ],
    imgArr12:[
      'https://s1.ax1x.com/2020/09/14/wDPy1P.md.jpg'
    ],
    imgArr13:[
      'https://s1.ax1x.com/2020/09/14/wDPopq.png'
    ],
    imgArr14:[
      'https://s1.ax1x.com/2020/09/14/wDPLBF.png'
    ],
    imgArr15:[
      'https://s1.ax1x.com/2020/09/14/wDPjAJ.jpg'
    ],
  },
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
fnckdj: function (e) {
  wx.navigateTo({
    url: "../fengniaoguoji/fengniaoguoji"
  })
} ,
previewImg:function(e){
  console.log(e.currentTarget.dataset.index);
  var index = e.currentTarget.dataset.index;
  var newImgArr3=this.data.imgArr.concat(this.data.imgArr2);
  var newImgArr4=this.data.imgArr3.concat(newImgArr3);
  var newImgArr5=this.data.imgArr4.concat(newImgArr4);
  var newImgArr6=this.data.imgArr5.concat(newImgArr5);
  var newImgArr7=this.data.imgArr6.concat(newImgArr6);
  var newImgArr8=this.data.imgArr7.concat(newImgArr7);
  var newImgArr9=this.data.imgArr8.concat(newImgArr8);
  var newImgArr10=this.data.imgArr9.concat(newImgArr9);
  var newImgArr11=this.data.imgArr10.concat(newImgArr10);
  var newImgArr12=this.data.imgArr11.concat(newImgArr11);
  var newImgArr13=this.data.imgArr12.concat(newImgArr12);
  var newImgArr14=this.data.imgArr13.concat(newImgArr13);
  var newImgArr15=this.data.imgArr14.concat(newImgArr14);
  var newImgArr16=this.data.imgArr15.concat(newImgArr15);
  console.log(newImgArr16);
  wx.previewImage({
    current: newImgArr16[index],     //当前图片地址
    urls: newImgArr16,               //所有要预览的图片的地址集合 数组形式
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
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