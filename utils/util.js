const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function previewImage(index,imgArr) {
  wx.previewImage({
    current: imgArr[index], // 当前显示图片的http链接
    urls: imgArr
  })
}

module.exports = {
  formatTime,
  previewImage

}
