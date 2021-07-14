// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()


// 云函数入口函数
exports.main = async (event, context) => {
  return [{
      index: 0,
      imgList: [
        'https://img13.360buyimg.com/ddimg/jfs/t1/139839/8/8562/636554/5f609f5bE413cdd1f/6a660694aa6a17fc.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/178170/3/13996/88010/60ee4053E7123175b/00199b8365041dc2.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/115298/12/19148/1094071/5f6daab9Edd0f4f92/6d281f09dc0f699e.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/179652/8/14008/86421/60ee4073E3647079d/c3290322d080965b.jpg'
      ],
      videoUrl: 'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E9%BC%8E%E6%98%932.mp4',
      detailsList: [
        'https://img11.360buyimg.com/ddimg/jfs/t1/121029/18/12977/340204/5f609d00E2d358b5d/260a5ea713a7cd23.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/117521/33/17875/656666/5f609d4aEe31be455/7116cbb008d2c785.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/135584/40/9940/363350/5f609d6fE59839242/b0d1137b8d445b0d.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/130196/6/10067/229981/5f609da0Ec45ac29e/3b5154132948f35e.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/114365/23/18132/967765/5f609db4E0913635b/76e8f3b575ef2848.jpg',
      ]
    },
    {
      index: 1,
      imgList: [
        'https://img14.360buyimg.com/ddimg/jfs/t1/112987/16/18584/743177/5f6d5f80Ec2b49a0a/da61bad36af12bd8.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/178170/3/13996/88010/60ee4053E7123175b/00199b8365041dc2.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/115298/12/19148/1094071/5f6daab9Edd0f4f92/6d281f09dc0f699e.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/179652/8/14008/86421/60ee4073E3647079d/c3290322d080965b.jpg'
      ],
      videoUrl: 'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E9%BC%8E%E6%98%931.mp4',
      detailsList: [
        'https://img13.360buyimg.com/ddimg/jfs/t1/121505/32/12797/459378/5f609e81Ec210302e/66b5afb0081b2e3f.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/148829/29/9228/739024/5f6d5fb5E41e6dbfc/53b23c74326fba08.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/124407/29/13498/386241/5f6d5fdfE23e49dbb/20799fc92d839097.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/141068/23/8439/364615/5f609ebbE1d8eaa7e/301899683a723606.jpg',
        'https://img14.360buyimg.com/ddimg/jfs/t1/144329/6/8559/960620/5f609ecfE3bd09267/0499ae79f47af2b3.jpg'
      ]
    },
    {
      index: 2,
      imgList: [
        'https://img12.360buyimg.com/ddimg/jfs/t1/112098/27/18029/504468/5f60a01bE064e34a6/cad9729ef9feba66.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/178170/3/13996/88010/60ee4053E7123175b/00199b8365041dc2.jpg',
        'https://img10.360buyimg.com/ddimg/jfs/t1/115298/12/19148/1094071/5f6daab9Edd0f4f92/6d281f09dc0f699e.jpg',
        'https://img11.360buyimg.com/ddimg/jfs/t1/179652/8/14008/86421/60ee4073E3647079d/c3290322d080965b.jpg'
      ],
      videoUrl: 'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E9%BC%8E%E6%98%93%E6%97%A0%E6%B0%B4%E5%8D%B0%E6%88%90%E7%89%872.mp4',
      detailsList: [
        'https://img10.360buyimg.com/ddimg/jfs/t1/143957/1/8663/416081/5f60a067Efb689910/58905aac97eba28a.jpg',
        'https://img13.360buyimg.com/ddimg/jfs/t1/119972/29/12805/502723/5f60a079E3a4bce91/bf1d2e3f349fdec4.jpg',
        'https://img12.360buyimg.com/ddimg/jfs/t1/113785/9/17891/2408530/5f60a09cE7333ba80/5b86ad7b92c9c644.jpg',
      ]
    },
  ]
}