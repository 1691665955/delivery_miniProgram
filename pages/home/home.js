// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentHeight: 400,
    safeAreaTop: 0,
    orderPlacingList: [{
      id: 100000001,
      type: 1,
      title: "帮拿一个快递",
      content: "快递放在三期学生公寓教育超市内，谢谢，接单后联系我拿快递单号",
      publishTime: "4-19 10:24",
      deadlineTime: "4-19 12:24",
      deliveryTime: "4-19 9:28",
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
      publishTime: "4-19 9:30",
      deadlineTime: "4-19 14:30",
      price: 38,
      status: 1,
      deliveryInfo: null
    }],
    orderTakingList: [{
      id: 100000003,
      type: 1,
      title: "一个快递",
      content: "快递在学校西门保卫科，接单后联系我拿快递单号",
      publishTime: "4-19 9:24",
      deadlineTime: "4-19 11:24",
      price: 5,
      status: 1,
      deliveryInfo: null
    },{
      id: 100000004,
      type: 1,
      title: "快递",
      content: "快递在教育超市内，接单后联系我拿快递单号",
      publishTime: "4-19 9:25",
      deadlineTime: "4-19 11:25",
      price: 3,
      status: 1,
      deliveryInfo: null
    },{
      id: 100000005,
      type: 2,
      title: "请帮忙买点东西",
      content: "买一床1.8m宽的棉被",
      publishTime: "4-19 9:30",
      deadlineTime: "4-19 14:30",
      price: 58,
      status: 1,
      deliveryInfo: null
    },{
      id: 100000006,
      type: 1,
      title: "帮拿快递",
      content: "快递在教育超市内，接单后联系我拿快递单号",
      publishTime: "4-19 9:25",
      deadlineTime: "4-19 11:25",
      price: 3,
      status: 1,
      deliveryInfo: null
    },{
      id: 100000007,
      type: 2,
      title: "请帮忙去沃尔玛超市买两袋米",
      content: "帮忙买两袋30斤的大米，品牌：五常大米，再带一件罐装可口可乐",
      publishTime: "4-19 9:35",
      deadlineTime: "4-19 12:35",
      price: 38,
      status: 1,
      deliveryInfo: null
    }],
    rankingList: [{
      name: "李*宇",
      mobile: "178****8344",
      total: 4290,
      avatar: "/images/avatar_1.jpg"
    },{
      name: "张*",
      mobile: "182****4394",
      total: 3802,
      avatar: "/images/avatar_0.jpg"
    },{
      name: "李*",
      mobile: "182****7272",
      total: 3672,
      avatar: "/images/avatar_0.jpg"
    },{
      name: "孙*龙",
      mobile: "139****8328",
      total: 3446,
      avatar: "/images/avatar_3.jpg"
    },{
      name: "葛*",
      mobile: "130****2838",
      total: 2940,
      avatar: "/images/avatar_0.jpg"
    },{
      name: "肖*",
      mobile: "134****2938",
      total: 2239,
      avatar: "/images/avatar_0.jpg"
    },{
      name: "周*文",
      mobile: "182****2823",
      total: 2210,
      avatar: "/images/avatar_4.jpg"
    },{
      name: "樊*亭",
      mobile: "182****2837",
      total: 1992,
      avatar: "/images/avatar_2.jpg"
    },{
      name: "吴*",
      mobile: "186****0265",
      total: 1220,
      avatar: "/images/avatar_0.jpg"
    },{
      name: "吴*霞",
      mobile: "178****2822",
      total: 931,
      avatar: "/images/avatar_0.jpg"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      const res = wx.getSystemInfoSync()
      this.setData({
        safeAreaTop: res.safeArea.top,
        contentHeight: (res.safeArea.height - 50) * 750 / res.screenWidth - 346
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