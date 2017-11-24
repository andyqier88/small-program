// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userPwd: ''
  },
  userName: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  passWord: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  regBtnClick: function (e) {
    var that = this;
    var datastr = {
      data: {
        pwd: this.data.userPwd,
        tel: this.data.userName,
        uniquecode: "web"
      }
    }
    datastr = JSON.stringify(datastr);
    wx.request({
      url: 'https://core.uuucai.com/ybd_core_interface/register',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: datastr,
      success: function (res) {
        console.log(res)
        if (res.data.code == '200') {
          that.setData({
            ycid: res.data.data.ycid,
            response: res
          })
          try {
            wx.setStorageSync('ycid', res.data.data.ycid)
          } catch (e) {
            console.log(e)
          }
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
      }
    })
  },
  loginBtnClick: function () {
    wx.redirectTo({
      url: '/pages/login/login'
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