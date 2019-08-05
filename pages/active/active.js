//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    allTitle: [
      { id: 0, title: '客厅' },
      { id: 1, title: '厨房' },
      { id: 2, title: '卧室' },
      { id: 3, title: 'KTV博物馆博物馆' },
      { id: 4, title: '浴室' },
      { id: 5, title: '广场' },
      { id: 6, title: '公园' },
      { id: 7, title: '博物馆博物馆博物馆' }
    ],
    currentIndex: 0, //当前选中标题的下标
    scrollLeft: 0, //tab滚动条的位置
  },

  onLoad: function () {

  },

  //点击切换标题
  changeTitle(event) {
    console.log(event);
    let index = event.target.dataset.current;//当前点击标题的index
    this.setData({
      currentIndex: index
    })
  },

  //滑动切换内容
  changeContent(event) {
    let current = event.detail.current;
    let singleNavWidth = wx.getSystemInfoSync().windowWidth / 5;
    console.log(wx.getSystemInfoSync().windowWidth);
    this.setData({
      currentIndex: current,
      scrollLeft: (current - 2) * singleNavWidth
    });
  }
})

