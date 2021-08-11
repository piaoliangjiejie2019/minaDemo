// component/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    color: "#fff",
    list: [
      {
        "text": "首页",
        "isActive": true
      },
      {
        "text": "个人中心",
        "isActive": false
      }, {
        "text": "其他",
        "isActive": false
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const { index } = e.currentTarget.dataset;
      let { list } = this.data;
      list.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      this.setData({
        list
      })

    }
  }
})