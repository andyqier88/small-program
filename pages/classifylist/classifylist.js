// pages/classifylist/classifylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isjoin:true,
    toggle:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this;
    wx.request({
      url: 'https://core.uuucai.com/ybd_core_interface/classify',
      data: {
        "pagenum":0,
        "ycid": "100093",
        "method": "queryclassify"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          classifylist: res.data.data
        })
        console.log(res.data.data);
      }
    })
  },
  queryclassify:function(e){
    console.log(e)
    var that = this
    wx.request({
      url: 'https://core.uuucai.com/ybd_core_interface/web',
      data: {
        "classifyid": e.currentTarget.dataset.id,
        "method": "queryclassifyuser"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          queryclassifyuser: res.data.data,
          
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