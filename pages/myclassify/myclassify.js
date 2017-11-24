// pages/myclassify/myclassify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://core.uuucai.com/ybd_core_interface/classify',
      data: {
        "pagenum": 0,
        "ycid": "100093",
        "method": "querymyclassify"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // for (var i = 0; i < res.data.data.length; i++) {
        //   if (res.data.data[i].status == 1) {
        //     that.setData({
        //       id: res.data.data[i].id,
        //       name: res.data.data[i].name,
        //       isjoin: res.data.data[i].isjoin
        //     });
        //   }
        // }
        that.setData({
          myclassifylist: res.data.data
        })
        console.log(res.data.data);
      }
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
  
  }
})