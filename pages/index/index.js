//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    msg: '代码测试',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    indicatorActiveColor: "red"
  },
  
    goYun(){
      wx.navigateTo({
        url: '/components/webView/index', //
        success: function (res) {
          console.log('[success]=',res);
        },       //成功后的回调；
        fail: function (e) {
          console.log('[err]=',e);
        },         //失败后的回调；
        // complete: function () { 
        //   wx.showToast({
        //     title: '回到了首页'
        //   })
        // } 
      })
    }
  ,
  //事件处理函数
  shareCard() {
    wx.showShareMenu({
      withShareTicket: true,
      success: res => {
        console.log("[success]=",res);
      },
      fail: err => {
        console.log("[err]=",err);
      }
    })
  },
  addPhoneContact() {
    wx.addPhoneContact({
      firstName: '吴兵兵',
      mobilePhoneNumber: '13848203322',
      organization: 'yununyunyun',
      title: '营销管理总监',
      nickName: '冰冰',
      lastName: '污',
      remark: '销售',
      weChatNumber: '13848203322',
      addressCountry: '中国',
      addressState: '广东省',
      addressCity: '深圳市',
      addressStreet: '益田区',
      addressPostalCode: '110120130',
      url: 'http://yun.pingan.com',
      success: res => {
        console.log(res);
        wx.showToast({
          title: '联系人添加成功',
        });
      },
      fail: error => {
        console.log(error);
        wx.showToast({
          title: '联系人添加失败，请稍候重试',
        });
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
