// pages/user/user.js
const app = getApp()
Page({
  data: {
    dates: '',
    firstIndex: true,
    clickIndex: ''
  },

  onLoad() {
    let date = new Date()
    let current = 0
    let dates = this.caculateDate(date)
    for (let i = 0; i < dates.length; i++) {
      if (date.getMonth() + 1 == dates[i].month) {
        current = i
        break
      }
    }
    this.setData({
      dates: dates,
      swiperCurrent: current
    })

  },
  dateSwiperChange(e) {
    console.log(e.detail.current)
    // this.setData({ swiperCurrent: e.detail.current})

  },
  caculateDate(date) {
    let dates = []
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let preDate = {}
    if ((month - 1) % 12 == 0) {
      preDate.year = year - 1
      preDate.month = 12
    } else {
      preDate.year = year
      preDate.month = month - 1
    }
    dates.push(preDate)
    for (let i = month; i <= month + 11; i++) {
      let afterDate = {}
      if (i / 12 > 1) {
        afterDate.year = year + 1
        afterDate.month = i % 12
      } else {
        afterDate.year = year
        afterDate.month = i % 12 == 0 ? 12 : i % 12
      }
      dates.push(afterDate)
    }
    console.log(dates);
    return dates
  },
  clickDate(e) {
    console.log(typeof e.currentTarget.id)
    this.setData({
      firstIndex: false,
      clickIndex: parseInt(e.currentTarget.id),
      swiperCurrent: parseInt(e.currentTarget.id)
    })

  }
})
