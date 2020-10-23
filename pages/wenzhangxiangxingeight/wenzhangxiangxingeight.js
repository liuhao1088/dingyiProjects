// pages/wenzhangxiangxingeight/wenzhangxiangxingeight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLc6HXWXrlRdL7k7ib18icuCaM0hf92Crq9BibAS98I7U5oUFG7XSTWNtPA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr2:[
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLQOjkjW1pzicdxlDicrRzEcBqCiaZl0b6fRbibCjDicI9vUDIQWk5WcUGv1w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLtJvP5qUfibzKmWUlnIAW8U7ibGlONrreCMZ7VmqYVVD37JL3oEqwWEEw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLQOrgqicnQnB7wiaHiawD15VNwdhkyfqnaesguem8hugN5qBrG48yMkrnQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr3:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibL2XhiaFh4HkC5TZVxbIEiaeuq2LemXmZ29OIicXwYhSgSLyrDjHtTf6JicQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr4:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLWQOsa9Y1tcQGxnRFUk50CW548HltGY51o6iaHUmemWhVcyld52IrYSA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr5:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLiaDmUXw3smWjNzUaNVvjyAFgEFPm4bM7IyBtpKB03XKPX3aTtrB7biaQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr6:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLiaDmUXw3smWjNzUaNVvjyAFgEFPm4bM7IyBtpKB03XKPX3aTtrB7biaQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr7:[
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLVYUEYH9tuwjqdumMXmD6R3Mm9z0ULPBMJeRL9tFgCdapG4v343jMDg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr8:[
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLgxbN9gtsThFIpYTBlChOKcUljNh9gA5bZtPn3P2uUtCqiaTOrueSpHg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr9:[
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLIzzMHc8Lu5HM3eDLn8FHfoDbqq5uAb0by5JdT53bBYV0I1wZZrdvEQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr10:[
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLzpeV2gZiaiaic0KczL67lEMAgvOSDTEmIxk5sLK2ibzgLIYUdUHc1ibVnXw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr11:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLl3Gmic2xhVtOY9zTAMtCbJZrVMuFKL89hSjjDS5icq0uiaahewoSWarUg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
  },
  fanhuidj: function () {
    wx.reLaunch({
      url: "../details/details"
    })
  },

  zhuyefanhuidj: function () {
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
    console.log(newImgArr12);
    wx.previewImage({
      current: newImgArr12[index],     //当前图片地址
      urls: newImgArr12,               //所有要预览的图片的地址集合 数组形式
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