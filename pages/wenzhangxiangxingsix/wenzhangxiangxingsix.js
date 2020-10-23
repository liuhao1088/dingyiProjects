// pages/wenzhangxiangxingsix/wenzhangxiangxingsix.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      'https://mmbiz.qpic.cn/sz_mmbiz_gif/fbt8lOeIicWBeF3E5t7iascnLNVLx6FibN55lydQBpgagG7iceicGKic7yeZmo3Z4IV8W1nz0d7Z0MIEReF8Y8hxgGTQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr2:[
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDwevPGuuScs8dLLxsmhgRO626RNzxSqX3mkUJm7PIcP31kUzBsaHPJDuebldwvT86fzS0MlDWu7w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr3: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGAaREPEPqHk48IOwrtRWW4C6ib9FfGvEPOic7rMFof2d2zqWgiabUdyuTg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGrIFQRusYysxRhxGlqjAO4TNwOHGSapvYCoHG52wFhbyeTUeWUibwibEg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgG8M4aa5ZkU5f2F0vwicrczDC5ZzQ273O55pzmQ1Ef7X68rMRo33KoGIQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGcMHk1PQR8UEO2LIcMtLC5jiaMQzIX8RJP76h8y25stnJXvCRUvYoiagw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGMujqw9j6VtcSVIhBxOwcAiaACqMkw4NCltRnWftwRBDINIItAq77q2w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGKWDt9xHpAW4NUWg1lt3zFSZIEl9PCiciag7iae1gj7vLSaWLDrnKQawJw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGiaHsWia8iaYibsHQZ2suLicZvJyZialJK7LaJhlrZ5wSllJRic8gtBHE0te6A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGuqtvpazcag962wuZLmqUwPWwTrfq5ktKmYVfyjxOg4AlobRSIFFyZw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGphewpILfpfXdcbuyumnZiasXyHUo5Lo5IU1prNbvBLL7d2VzYGwGImA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGe2uZQOxB7KzCozAwlwLPRm51P8FF825nDI8uQ6kY91wkSlebFeqB1g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr4: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGHBxHXNst5oPVLkP6DqrE9pUmfR7LZNW8XYSzktVPhBNwJsvezGYmMg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr5: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGeKeiaw2ib0bFlhyXVAUZODdDmXj8Qiajr92UDKBRu8a5ibIrG3tzhJJwtA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr6: [
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGC0GenP2kvo0ndq2DiclJSN4L7mvLibmAkpA5l4T9ibEqZq9sqiaWyGROjg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr7: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGY6fYVX4BtokMejavicK21Y3WP21pB9aa0L2V2RibDJQhbAo83ibJicx7fQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr8: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGNzlqxEW9WhGlLSo3iahuXCLDcheysltHemPibPrHQl3gJgO61Xhy7uiaw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr9: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGDoGs8319iaZldMseS89CKJIAov4Sozv1IRVnPUmzQ9fKyvxpU1bHjaA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr10: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGWjglpibnQC5qVv1qNFjQyzWmlpXonuSO1QicWq0ay96MRz23nCwDjX3w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr11: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGbOFPcx2HA17vkxYVZ2IkR3Txic8ccb3HaeIruuCZTS58I4QdTDg0UGA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr12: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGmF0oMBGIelgJvrj3TTVGHD6Rib2ptSy6LU5HqqbpOGo7AhicMeUZiap1g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr13: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGsQzc6tiapNC1LDjjWpbCTtNV3umYscW5ic9WY1Biba41B9NxBn60S5LFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr14: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGplbib9Xxe958Jys53Hhhq7bLtTvG0kycicZwoGEPO6Zb8kAHKicEDfL4g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr15: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGgzNqUVxVdib9qtNZwfm4MFpicasTc9RecUHfPFUvovFEdbbvfCrdsd1A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr16: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGh3zsw2RPcCWucf7Fwibzd961XZIuFXBFDpsL0oNicqhk79Q6iaex8w44Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr17: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgG31qmL1iaspQXMERDRMiccnmwKgOd4IjZsVmSk8ib1CUXwFr15N0WicOQDA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr18: [
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGUQgAlQTbVIZldabeRuGZ5MpThzLiaoVvAalgw4iaRJEt81IjuBMn046A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr19: [
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
    var newImgArr11 = this.data.imgArr10.concat(newImgArr10);
    var newImgArr12 = this.data.imgArr11.concat(newImgArr11);
    var newImgArr13 = this.data.imgArr12.concat(newImgArr12);
    var newImgArr14 = this.data.imgArr13.concat(newImgArr13);
    var newImgArr15 = this.data.imgArr14.concat(newImgArr14);
    var newImgArr16 = this.data.imgArr15.concat(newImgArr15);
    var newImgArr17 = this.data.imgArr16.concat(newImgArr16);
    var newImgArr18 = this.data.imgArr17.concat(newImgArr17);
    var newImgArr19 = this.data.imgArr18.concat(newImgArr18);
    var newImgArr20 = this.data.imgArr19.concat(newImgArr19);
   

    console.log(newImgArr20);
    wx.previewImage({
      current: newImgArr20[index], //当前图片地址
      urls: newImgArr20, //所有要预览的图片的地址集合 数组形式
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