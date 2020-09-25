// pages/wenzhangxiangxingfour/wenzhangxiangxingfour.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"4%",
    imgArr:[
      'https://mmbiz.qpic.cn/sz_mmbiz_gif/fbt8lOeIicWBeF3E5t7iascnLNVLx6FibN55lydQBpgagG7iceicGKic7yeZmo3Z4IV8W1nz0d7Z0MIEReF8Y8hxgGTQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr2:[
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDwevPGuuScs8dLLxsmhgRO626RNzxSqX3mkUJm7PIcP31kUzBsaHPJDuebldwvT86fzS0MlDWu7w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr3:[
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDwevPGuuScs8dLLxsmhgRO3qiaN8j8zh4hmbhBSs7ybdv8ibAquGecdCQ4Z2fUfGMcYwKzQzxPoibvA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr4:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNf52ZuDicDDcr8Uic8UEASqAkQ4ZsUG6pExyKGVuRfRABibCEPvzCeOTbaQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr5:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfsJDTYQCM5JCgMzl89LtozIGJawkxmgzmDMxWpYQ9EY9PxJyIsHDR7w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr6:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfzPfmDYZI9WHDSnzgJ72E2drft6pLOj3NqEVXvrWO9hfpGxIpFLc4eA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr7:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfRU1XiaKMibfygpLYJJx3ln2TL4mwOdV3vlcydvBc4wOlz2FZ2o3t8aPg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr8:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNf8KjXJqy665qibETt5xHLGib6e7KoUvkeDgic9mBVvoSr1AWdSBMkM4Y9g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr9:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfsM4C3RFvZWxOgU62KJrLkhrrtX3rEnGAfZJvHSWhQdtibibh7g824ebg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr10:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfg9jQae5KZUsKNicFJt0YQTO7EJq5YnW17iaxwDwOZZc7zPg4wzS5aTVQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr11:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfquBf7E362icTLYTnxos6WxwAJcJAtL9YQzT8Cr8QsCqOBsnOZib8ReTg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr12:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfvv4jUhXBy25t05eRfGAUeaHQqfUkMNYGCCiaDadcYvWFwc9v7dxMJicQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr13:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfuzGPmG37J2qbwXrkXMN9CaOVW1g2LiaxnP9MOr2cmSuJ9ctTHct64Lg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfXQRSgrE1LDQWicycjaeRxlHIkpqMk01lbRW0SDwVcg5gic7VzGbX9ibhw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfqRBR8Mjic0cRxaVj0r1K65OylXcYClDEMiaibJjhv02kiaEWvp2QkEEfHg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr14:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEUjBs5GmogHBd0icHhX0BCNfFH1l4ExqyVD2TxQkz2uCPLic7tAn1C6zciaYmdwu1V6J83tHhf17EJCg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr15:[
      ' https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLl3Gmic2xhVtOY9zTAMtCbJZrVMuFKL89hSjjDS5icq0uiaahewoSWarUg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
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