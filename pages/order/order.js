// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentHeight: 400,
    orderList: [{
      id: 100000001,
      type: 1,
      title: "帮拿一个快递",
      content: "快递放在三期学生公寓教育超市内，谢谢，接单后联系我拿快递单号",
      publishTime: "04-19 10:24",
      deadlineTime: "04-19 12:24",
      deliveryTime: "04-19 10:28",
      price: 4,
      status: 2,
      deliveryInfo: {
        name: "李浩宇",
        mobile: "17820338344"
      }
    },{
      id: 100000002,
      type: 2,
      title: "代买水果蔬菜",
      content: "请帮忙去沃尔玛超市买点新鲜蔬菜和水果，苹果2斤、沃柑2斤、生菜和芹菜各买1斤、猪肉400g、青椒500g、土豆3斤",
      publishTime: "04-19 9:30",
      deadlineTime: "04-19 14:30",
      price: 38,
      status: 1,
      deliveryInfo: null
    },{
      id: 100000003,
      type: 2,
      title: "代买水果蔬菜",
      content: "请帮忙去教育超市买点水果回来",
      publishTime: "04-05 15:30",
      deadlineTime: "04-05 18:30",
      deliveryTime: "04-05 16:28",
      finishTime: "04-05 17:03",
      price: 10,
      status: 3,
      deliveryInfo: {
        name: "王维",
        mobile: "17820834774"
      }
    },{
      id: 100000004,
      type: 2,
      title: "代买水果蔬菜",
      content: "请帮忙去教育超市买点水果回来",
      publishTime: "04-05 15:20",
      deadlineTime: "04-05 18:20",
      deliveryTime: "",
      finishTime: "",
      price: 10,
      status: 0,
      deliveryInfo: null
    },{
      id: 100000003,
      type: 1,
      title: "帮忙那个快递，在教育超市",
      content: "下单后联系本人拿取件码",
      publishTime: "02-22 9:24",
      deadlineTime: "02-22 10:24",
      deliveryTime: "02-22 9:30",
      finishTime: "02-22 9:55",
      price: 5,
      status: 3,
      deliveryInfo: {
        name: "张智",
        mobile: "18220822778"
      }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      const res = wx.getSystemInfoSync()
      this.setData({
        contentHeight: res.windowHeight * 750 / res.screenWidth - 80
      })
    } catch (e) {

    }
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