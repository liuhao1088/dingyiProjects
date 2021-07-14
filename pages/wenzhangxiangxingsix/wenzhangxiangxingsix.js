var util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      'https://mmbiz.qpic.cn/sz_mmbiz_gif/fbt8lOeIicWBeF3E5t7iascnLNVLx6FibN55lydQBpgagG7iceicGKic7yeZmo3Z4IV8W1nz0d7Z0MIEReF8Y8hxgGTQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //2
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDwevPGuuScs8dLLxsmhgRO626RNzxSqX3mkUJm7PIcP31kUzBsaHPJDuebldwvT86fzS0MlDWu7w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',

      //3
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGAaREPEPqHk48IOwrtRWW4C6ib9FfGvEPOic7rMFof2d2zqWgiabUdyuTg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGrIFQRusYysxRhxGlqjAO4TNwOHGSapvYCoHG52wFhbyeTUeWUibwibEg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgG8M4aa5ZkU5f2F0vwicrczDC5ZzQ273O55pzmQ1Ef7X68rMRo33KoGIQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGcMHk1PQR8UEO2LIcMtLC5jiaMQzIX8RJP76h8y25stnJXvCRUvYoiagw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGMujqw9j6VtcSVIhBxOwcAiaACqMkw4NCltRnWftwRBDINIItAq77q2w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGKWDt9xHpAW4NUWg1lt3zFSZIEl9PCiciag7iae1gj7vLSaWLDrnKQawJw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGiaHsWia8iaYibsHQZ2suLicZvJyZialJK7LaJhlrZ5wSllJRic8gtBHE0te6A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGuqtvpazcag962wuZLmqUwPWwTrfq5ktKmYVfyjxOg4AlobRSIFFyZw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGphewpILfpfXdcbuyumnZiasXyHUo5Lo5IU1prNbvBLL7d2VzYGwGImA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGe2uZQOxB7KzCozAwlwLPRm51P8FF825nDI8uQ6kY91wkSlebFeqB1g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //4
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGHBxHXNst5oPVLkP6DqrE9pUmfR7LZNW8XYSzktVPhBNwJsvezGYmMg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //5
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGeKeiaw2ib0bFlhyXVAUZODdDmXj8Qiajr92UDKBRu8a5ibIrG3tzhJJwtA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //6
      'https://mmbiz.qpic.cn/sz_mmbiz_jpg/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGC0GenP2kvo0ndq2DiclJSN4L7mvLibmAkpA5l4T9ibEqZq9sqiaWyGROjg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //7
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGY6fYVX4BtokMejavicK21Y3WP21pB9aa0L2V2RibDJQhbAo83ibJicx7fQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //8
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGNzlqxEW9WhGlLSo3iahuXCLDcheysltHemPibPrHQl3gJgO61Xhy7uiaw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //9
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGDoGs8319iaZldMseS89CKJIAov4Sozv1IRVnPUmzQ9fKyvxpU1bHjaA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //10
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGWjglpibnQC5qVv1qNFjQyzWmlpXonuSO1QicWq0ay96MRz23nCwDjX3w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //11
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGbOFPcx2HA17vkxYVZ2IkR3Txic8ccb3HaeIruuCZTS58I4QdTDg0UGA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //12
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGmF0oMBGIelgJvrj3TTVGHD6Rib2ptSy6LU5HqqbpOGo7AhicMeUZiap1g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //13
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGsQzc6tiapNC1LDjjWpbCTtNV3umYscW5ic9WY1Biba41B9NxBn60S5LFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //14
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGplbib9Xxe958Jys53Hhhq7bLtTvG0kycicZwoGEPO6Zb8kAHKicEDfL4g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //15
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGgzNqUVxVdib9qtNZwfm4MFpicasTc9RecUHfPFUvovFEdbbvfCrdsd1A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //16
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGh3zsw2RPcCWucf7Fwibzd961XZIuFXBFDpsL0oNicqhk79Q6iaex8w44Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //17
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgG31qmL1iaspQXMERDRMiccnmwKgOd4IjZsVmSk8ib1CUXwFr15N0WicOQDA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //18
      'https://mmbiz.qpic.cn/sz_mmbiz_png/fbt8lOeIicWDuplicGCszCCrO32zTNsFgGUQgAlQTbVIZldabeRuGZ5MpThzLiaoVvAalgw4iaRJEt81IjuBMn046A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      //19
      'https://mmbiz.qpic.cn/mmbiz_jpg/fbt8lOeIicWAnribibsHXJOEKrgic8xbf1ibLl3Gmic2xhVtOY9zTAMtCbJZrVMuFKL89hSjjDS5icq0uiaahewoSWarUg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
  },
  
  previewImg(e) {
    let index = e.currentTarget.dataset.index;
    let imgArr = this.data.imgArr;
    util.previewImage(index,imgArr);
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