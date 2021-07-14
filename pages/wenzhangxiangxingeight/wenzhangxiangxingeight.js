var util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLc6HXWXrlRdL7k7ib18icuCaM0hf92Crq9BibAS98I7U5oUFG7XSTWNtPA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      // 2
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLQOjkjW1pzicdxlDicrRzEcBqCiaZl0b6fRbibCjDicI9vUDIQWk5WcUGv1w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLtJvP5qUfibzKmWUlnIAW8U7ibGlONrreCMZ7VmqYVVD37JL3oEqwWEEw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLQOrgqicnQnB7wiaHiawD15VNwdhkyfqnaesguem8hugN5qBrG48yMkrnQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //3
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibL2XhiaFh4HkC5TZVxbIEiaeuq2LemXmZ29OIicXwYhSgSLyrDjHtTf6JicQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //4
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLWQOsa9Y1tcQGxnRFUk50CW548HltGY51o6iaHUmemWhVcyld52IrYSA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //5
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLiaDmUXw3smWjNzUaNVvjyAFgEFPm4bM7IyBtpKB03XKPX3aTtrB7biaQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //6
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLiaDmUXw3smWjNzUaNVvjyAFgEFPm4bM7IyBtpKB03XKPX3aTtrB7biaQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //7
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLVYUEYH9tuwjqdumMXmD6R3Mm9z0ULPBMJeRL9tFgCdapG4v343jMDg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //8
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLgxbN9gtsThFIpYTBlChOKcUljNh9gA5bZtPn3P2uUtCqiaTOrueSpHg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //9
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLIzzMHc8Lu5HM3eDLn8FHfoDbqq5uAb0by5JdT53bBYV0I1wZZrdvEQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //10
      'https://mmbiz.qpic.cn/mmbiz_png/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLzpeV2gZiaiaic0KczL67lEMAgvOSDTEmIxk5sLK2ibzgLIYUdUHc1ibVnXw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //11
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLl3Gmic2xhVtOY9zTAMtCbJZrVMuFKL89hSjjDS5icq0uiaahewoSWarUg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
  },
  
  previewImg(e){
    let index = e.currentTarget.dataset.index;
    let imgArr = this.data.imgArr;
    util.previewImage(index,imgArr);
    
    // wx.previewImage({
    //   current: this.data.imgArr[index], // 当前显示图片的http链接
    //   urls: this.data.imgArr
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.imgArr)
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