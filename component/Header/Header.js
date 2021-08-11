// component/Header/Header.js
//Component Object
Component({
  properties: {
    myProperty: {
      type: String,
      value: '',
      observer: function () { }
    },

  },
  data: {
    modalName:"",
    inputText:"",
  },
  methods: {
    showModal(e){
      // console.log(e);
      this.setData({
        modalName:e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      const {button} = e.currentTarget.dataset;
      const {inputText} = this.data;
      console.log(e);
      if(inputText.trim() != "" && button === "confirm" ){
        wx.showToast({
          title: '正在上传...',
          duration:1000,
          mask: true
        })
        console.log(inputText);
        this.setData({
          modalName: null,
          inputText: ""
        })
        wx.showToast({
          title: '上传成功',
          duration:500,
          mask: true
        })
      }else if( button === "confirm" && inputText.trim() === ""  ){
        wx.showToast({
          title: '输入不合理',
          duration: 1000,
          mask: true,
          icon: 'error',
          success: (res) => {
          },
        })
      }else{
        this.setData({
          modalName: null,
          inputText: ""
        })
      }
    },
    handleText(e){
      // console.log(e);
      this.setData({
        inputText:e.detail.value
      })
    },
  },
  created: function () {

  },
  attached: function () {

  },
  ready: function () {

  },
  moved: function () {

  },
  detached: function () {

  },
});