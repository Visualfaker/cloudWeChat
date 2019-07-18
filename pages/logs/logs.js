//logs.js
const util = require('../../utils/util.js')
const app = getApp()
// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classfiySelect: "",
    leftText: [{
      id: "01",
      text1: "美妆专区",
    },
    {
      id: "02",
      text1: "面部清洁",
    },
    {
      id: "03",
      text1: "洗护专区",
    },
    {
      id: "04",
      text1: "面膜",
    },
    {
      id: "05",
      text1: "口红",
    },
    {
      id: "06",
      text1: "电子",
    },
    {
      id: "07",
      text1: "衣服",
    },
    {
      id: "08",
      text1: "裤子",
    },
    {
      id: "09",
      text1: "头套",
    },
    {
      id: "10",
      text1: "卸妆",
    },
    {
      id: "11",
      text1: "美食",
    },
    {
      id: "12",
      text1: "首饰",
    },
    {
      id: "13",
      text1: "电脑",
    },
    {
      id: "14",
      text1: "手机",
    },
    {
      id: "15",
      text1: "相机",
    },
    {
      id: "16",
      text1: "紫砂",
    },
    {
      id: "17",
      text1: "茶叶",
    },
    {
      id: "18",
      text1: "内裤",
    }
    ],
    rightData: [{
      id: "01",
      title: "美妆专区",
      frist: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
        id: 1,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
        id: 2,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      id: "02",
      title: "面部清洁",
      frist: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      id: "03",
      title: "洗护专区",
      frist: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      id: "04",
      title: "面膜",
      frist: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      id: "05",
      title: "口红",
      frist: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
    {
      id: "06",
      title: "电子",
      frist: [{
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      {
        url: "/images/85309.jpg",
        text: "卡姿兰补水套装",
        money: 200,
        sum: 20,
      },
      ],
    },
      {
        id: "07",
        title: "衣服",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "08",
        title: "裤子",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "09",
        title: "头套",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "10",
        title: "卸妆",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "11",
        title: "美食",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "12",
        title: "首饰",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "13",
        title: "电脑",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "14",
        title: "手机",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "15",
        title: "相机",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "16",
        title: "紫砂",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "17",
        title: "茶叶",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
      {
        id: "18",
        title: "内裤",
        frist: [{
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        {
          url: "/images/85309.jpg",
          text: "卡姿兰补水套装",
          money: 200,
          sum: 20,
        },
        ],
      },
    ],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      classfiySelect: this.data.leftText[0].id
    })
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

  },
  //滚动触发
  scroll: function (e) {
    var scrollTop = e.detail.scrollTop,
      h = 0,
      classfiySelect;
    var that = this;
    that.data.leftText.forEach(function (clssfiy, i) {
      var _h = 26 + that.length(clssfiy['id']) * 102;
      if (scrollTop >= h) {
        classfiySelect = clssfiy['id'];
      }
      h += _h;
      console.log(h);
    })
    that.setData({
      classfiySelect: classfiySelect,
    })
  },
  //求每一栏高度
  length: function (e) {
    var that = this;
    var rightData = that.data.rightData;
    for (var i = 0; i < rightData.length; i++) {
      if (rightData[i]['id'] == e) {
        return rightData[i]['frist'].length;

      }
    }
  },
  //点击左边事件
  left_list: function (e) {
    var that = this;
    var l_id = e.currentTarget.dataset.id;
    that.setData({
      rigId: l_id,
    })
  },
  //跳转详情界面
  particulars: function (e) {

  }
})