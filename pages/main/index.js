// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:0,
    sentences: [
      "能永远明朗坦荡钟情豁达，有得有失有坚持，能笑能哭能尽欢",
      "温山软水，不及你眉眼半分温柔",
      "站在自己热爱的世界里，闪闪发光",
      "把自己活成一束光，自信坦荡，光芒万丈！",
      "夏天有迟暮的霞光，正如晚来的你皆是笑意",
      "心累的时候，换个角度看世界，压抑的时候换个环境深呼吸",
      "从来都觉得：践踏他人成功、诋毁他人，根本就不是什么好品质",
    ]
  },
  handleTransmit(e){
    const {index} = e.detail;
    this.setData({
      selected:index
    })
  },
  handlePublish(e){
    const inputText = e.detail.inputText;
    this.setData({
      sentences:[inputText,...this.data.sentences]
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})