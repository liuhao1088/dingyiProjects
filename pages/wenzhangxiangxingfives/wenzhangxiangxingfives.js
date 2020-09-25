// pages/wenzhangxiangxingfives/wenzhangxiangxingfives.js
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
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBYibsFFpylVuGj17225UibjyXyVKp5BZOWLk50wILdyjuw5Zr1NWyvHCw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr4:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKB4Hr0Ae9JiaubibFzoIt6bGXibmGPKbhCnKvQzPGsmn1UKLib4MScRoYNNg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr5:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBiaUFhgMEw6eWOA31L8uXeQRibwElgxT2flcqSNMRqPhlFibe3xzOq5EZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr6:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBtyiakB7L0zD5mLJicgv2cRdq2R3cQtnde4V3ep5rVlh3dbHtMib2F2yeQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr7:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBAiagA03LfLhMENbjjqGib4beyzIibuj6wSD4sS9LYlmIdIyK5vjDbDjHQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr8:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBKnazPs5SdIGUDut6vAOI1d7MBJNJUIFoJtbfJxfY7wP6yJUGNCekwQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr9:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBCyTCzLcav44Cfjibo2meqetVbNF1fSGwh4AQ0EJZTSmWEefye0WXmag/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr10:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBYfwOrgpEolth3Je6bdY1AxXXGOibca2FRAicsqUdbIQXH1lhP5h2gACg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr11:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBWTtkicST2HheqShUenfkLVDN3SPFbTQYibPhCRiaPUs0Ywpgicibh28dhnA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr12:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBibGQtfk5CRxQ2MVQMCtWeOk6iaP6lmLsibmZ0WvB6kib5vvWloGFmapHAg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr13:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBzqCjIKoMiaaMxDQBF7ibTlOJgYrPmbjQicTcdzXOrktImYgDbvKgSW6GQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr14:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBt7T4PTsRKxFn9VDIGtJJIVvpCruE8u2cs5QcBL2oqvziaThwjt1ut8Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBSYHb0heeQ5dGibIhalQLXfGzeUJyCZvH30IFUYiaFGic5tQDB5Kqjns4g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr15:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBibsnfuibWUF5W508jTSgKibbNSswyHSlcqDOXhQnqeRW24BS76ichBBHQw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBgxfP6YJKcePl1ickS8JoibKLVwib5kY4kNS37h6xkCYYlSkrkLRF7P7OA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr16:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBfe4KVlVe1MDVsibE3nmLGYARPfUXRYpKa5ibp3SI2xEjpkzfc58JSS1A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBFib30FbQib7LPjZBNrjCIZn0zRaebOxTF2YePCoKVY2adf9OTd3iahwKg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBR8e632FsMgAr4aG2fZWlkdZeCPY9IVZ5ibDsebVexSAicR5aicFVsN41A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKB1ykLXfjOS3bXBFUBzY4J8PXn43Ww35g9ibKTIZfy2IAiaUTDYY9JvdxQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr17:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBLrz9sib5dice4uO5D4CEB296huwOjJG4alPYLszt5niciburMDl6PEK1XA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr18:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKB1srtkbFn4y803WOicGjM1vuEBfDJLln4A3SYxlSJSLCK8wNK21MmTFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr19:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBw1na2KNZkFU23G27osgPGiayxcmKL9CWMic5PyUiasvaOtFZD6MMet7uw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr20:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKB1hicF1NodOicQ9dXZ9B5md1QcmcCC99Nx6r7ayjao73wEQSSN4nBLYqw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr21:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBnJpgQzbdIo9qG5MVn43q5mw4TAmgS6XwKT44GBNNwSp8c1qRHO5Aicg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBgkgIYEHMQZicicpUFfbpXECmJfJEcVLT5bKstn3r02RRTO5ER24nIqFA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr22:[
      'https://mmbiz.qpic.cn/mmbiz_png/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBnHwTgtYLJIDgxyLmOXibgJmbPunre0yjcU3z9eSnvuYjXXibHoLHUnMw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr23:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBO8jwIictP4nZdX9prd3cO7ppw0YztEhrj9mw0oFCicwEibs63ibdgrfbxQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBYMyGfwiaW71xrdbZac6DHT9J3odEEQAXrpiaaaa82icBTYEl4NnovJmYA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKB8dstv0kR4Wx0pmBricteZPYr6TXXMDLfRtgiabS6xGymQricF7Ria8GibeA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr24:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBNrySNQNZXx3DVjZlOdOFsBp8gQTfbrIuFpXV9a45FZ5jiaNO9FXzrhg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr25:[
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBvxiaTicEh9u0xfwc2Hx7avnIO9lYVthk3J1MfZ8CttuRwpvGtjCk520w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBDS9B1F3icfjNZ7xsBFg3XxKFxecOZASdA9Ko2icQ41o3Tr5ibOaN1YJBg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      'https://mmbiz.qpic.cn/mmbiz_jpg/ibwXLx8U0kEWvPMnvvmrQ2VK15ypicmmKBQqBGDAicGrG2u5mydcjWXSmzXttZUEibwticWCe5sghAQ0P7mGv8Ls4pw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    ],
    imgArr26:[
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
  var newImgArr16=this.data.imgArr15.concat(newImgArr15);
  var newImgArr17=this.data.imgArr16.concat(newImgArr16);
  var newImgArr18=this.data.imgArr17.concat(newImgArr17);
  var newImgArr19=this.data.imgArr18.concat(newImgArr18);
  var newImgArr20=this.data.imgArr19.concat(newImgArr19);
  var newImgArr21=this.data.imgArr20.concat(newImgArr20);
  var newImgArr22=this.data.imgArr21.concat(newImgArr21);
  var newImgArr23=this.data.imgArr22.concat(newImgArr22);
  var newImgArr24=this.data.imgArr23.concat(newImgArr23);
  var newImgArr25=this.data.imgArr24.concat(newImgArr24);
  var newImgArr26=this.data.imgArr25.concat(newImgArr25);
  var newImgArr27=this.data.imgArr26.concat(newImgArr26);

  console.log(newImgArr27);
  wx.previewImage({
    current: newImgArr27[index],     //当前图片地址
    urls: newImgArr27,               //所有要预览的图片的地址集合 数组形式
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