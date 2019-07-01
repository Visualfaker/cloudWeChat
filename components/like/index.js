// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: true
    },
    count: {
      type: Number,
      value: 3
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    againBuy: function(event) {
      console.log(event);
      console.log('[e.currentTarget]=', event.currentTarget.id)

      let vLike = this.properties.like;
      let vCount = this.properties.count + 1;
      
      this.setData({
        count: vCount
      })
    },
    refund: function(e) {
      console.log('[e.target]=', e.target.id)
      let vCount = this.properties.count
      if(this.properties.count > 0){
        vCount--
      }
      this.setData({
        count: vCount
      })
    }
  }
})
