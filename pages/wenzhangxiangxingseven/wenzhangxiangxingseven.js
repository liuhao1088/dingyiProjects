// pages/wenzhangxiangxingseven/wenzhangxiangxingseven.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      'https://mmbiz.qpic.cn/sz_mmbiz_gif/fbt8lOeIicWBeF3E5t7iascnLNVLx6FibN55lydQBpgagG7iceicGKic7yeZmo3Z4IV8W1nz0d7Z0MIEReF8Y8hxgGTQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr2:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2PiaKGUGmApD4MeDUUgxZx25j2kIia8icKtCXDkn4ypiahOU5pKibcpljOJE2g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr3:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2PiaU2jHIrbkeylLZS5uTLDj4lu2rSJiaOGicdfIDE8X8ol9t3KTTDYoZvhw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr4:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2Piar5rAGxd83NUH8Jrb2d8zu6yxlwf0AiclicvUl9khSWnAEBkCcN3VR3Cg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr5:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2Pia4qZMM9oUibQs1wHxl3FOt7kemBxQvJMDxUC7OcomeabJILibJYiavttpw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr6:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2PiaDwIEvCA2zlaNP0zPPicmk7RTr5IniaDUxXnYBeqQh44ozU4FCLTXsVdg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr7:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2PiaJV6TUSUGickhtslVgB707W4dSjdz4Mh86Gm7xIsvvGXF3hXic9icfIvKA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr8:[
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2Pia4Gib8vkyz7QuzpLT0hZqcncr0dHgUD1jqBXCuvXocPaPXVFjKPbvKsw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2PiawMJrv1ibsReMdmbtiaDV5DibURJl3ERedgwgvJyNaz1Gw8TZiacGvLDkfQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWAMgfUvxic3y3Kibn2JOxI2PiaZjjLGQM4kUFPFia3vO7X0xicbTWXTq4vxh13dbnJXN4kVozgcfDlhcJg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr9:[
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
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var newImgArr3 = this.data.imgArr.concat(this.data.imgArr2);
    var newImgArr4 = this.data.imgArr3.concat(newImgArr3);
    var newImgArr5 = this.data.imgArr4.concat(newImgArr4);
    var newImgArr6 = this.data.imgArr5.concat(newImgArr5);
    var newImgArr7 = this.data.imgArr6.concat(newImgArr6);
    var newImgArr8 = this.data.imgArr7.concat(newImgArr7);
    var newImgArr9 = this.data.imgArr8.concat(newImgArr8);
    var newImgArr10 = this.data.imgArr9.concat(newImgArr9);
   

    console.log(newImgArr10);
    wx.previewImage({
      current: newImgArr10[index], //当前图片地址
      urls: newImgArr10, //所有要预览的图片的地址集合 数组形式
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
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