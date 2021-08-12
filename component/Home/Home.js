// component/Home/Home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sentences:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modalName:"",
    wholeSentence:"zzz"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal(e) {
      this.setData({
        wholeSentence: e.currentTarget.dataset.sentence,
        // modalName: e.currentTarget.dataset.target
      })
      this.setData({
        // wholeSentence: e.currentTarget.dataset.sentences,
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null,
        wholeSentence:""
      })
    },
  },


})
