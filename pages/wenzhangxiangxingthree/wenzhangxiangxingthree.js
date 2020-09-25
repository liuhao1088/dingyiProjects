// pages/wenzhangxiangxingthree/wenzhangxiangxingthree.js
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
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIlBGOyKiaSC4OdHcHDysibpJia7j9ppR1CSFnPQp7X0H2Owpo2YqFIOH9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr4:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIA2z50GqIP5tn6AibbEm3tKwaGSDG8EV96pcVuibBGvtiaiaDXXnzw5yppA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr5:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkISnTbtcAH2bBv2LEVmiawicgCiciaX34RibKJqQnicNhqesicgA46QVWSgYlmQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr6:[
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDwevPGuuScs8dLLxsmhgRO3qiaN8j8zh4hmbhBSs7ybdv8ibAquGecdCQ4Z2fUfGMcYwKzQzxPoibvA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr7:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWClEjXJ0V2b1yhicsU9ZWkFymRnHDbpUtmGZfUjFqYdlU6qYmQgAG8TOE93qH6l9fHwicpXPONjf8zw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr8:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWBL5afDSpMG9FR9VFdiaCxADwwBbDRcrljXicnrOZyf6wQib8vy7BqKC4qhzmEbvQ49sV9VuGelz9ewQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr9:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkItIWndhMnAiaoNp8Wwuexf1RHM8S4epMVux2reIKrQ8ibEJU2d1zKE1KQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr10:[
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDwevPGuuScs8dLLxsmhgROYhSF7NaSToGtg92Uku7CLmdF8L9YqCsO166wvaYqWdhVxQOLgRzReQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr11:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIS5oicE0D20uM7BzogCBvbWJK0uRyibOGaiaUZ8TQ6WUicLmaicraRkYrJhg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIy3b8Pjj3sVDibzl7m9t0EhSproVREpHZH1gcyMMgWQCnGqblR6zcTVg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIcRFSTRDTvzoHFq84xDSzhSagHktbKAOpahBtgumaibEhRibT1ibgzqSzQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIiaicWN26RqDoSu5RwX9B1r9Ws8C6fNz4JfkQkxmgxd3DtWABIsUnz9EQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIvZQl3tAFOFPFof3Ike9TcyTNCx9ceDWAagwkaWFcPft5PYdJTCIO7w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIOgyzRSVjkvjShYBBcRrC39p0K7hiciaO4kI0vjanWSaIeYBicZmiaWjddQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIwtuJBHx5Sr0icvyz3m1JiaD7ibVUAJ2RRpohRLDEXK7b1NR2px0L4tHKw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIr766lic8dzfwf8nUN9IZd2KcWeVWPmdmS72dSQWmMxf4sE5z8acgicIA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIWu6yOL9jwzTtbxnqC84tPImp8FeRqibbUqZOHuOulJuvTaxE4p7SHGA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkI2jLFOF0icdqumsiaGwIX7LlCFdJWyHpFfwQ1Va5icVnA4ypM4C5zkLNpg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    
    imgArr12:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIPop4kHnpUiaPv51cFTtyZPLpcXvBkx3w331KS1RWY6WydSMMxaeib8icA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkIicWktfNr4W4p4LPGke4ia8icTCviaWvO2R0dU30YHliajVToPDwrExEus8Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr13:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEV4kPwEgV1dnaQkeYiaKLkkITMSP2LxkVCWSGcep4iavEtZrQlYJOuh5F2ogickgPcmBBRLl9bV1VRNg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr14:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLl3Gmic2xhVtOY9zTAMtCbJZrVMuFKL89hSjjDS5icq0uiaahewoSWarUg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
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
    console.log(newImgArr15);
    wx.previewImage({
      current: newImgArr15[index],     //当前图片地址
      urls: newImgArr15,               //所有要预览的图片的地址集合 数组形式
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