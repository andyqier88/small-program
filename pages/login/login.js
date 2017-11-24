// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  
 
  data: {
    userName:'',
    userPwd:''
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
  loginBtnClick: function (e) {
    var that= this;
    var datastr = {
      data: {
        pwd: this.data.userPwd,
        tel: this.data.userName,
        uniquecode: "web",
        type: 0
      }
    }
    datastr = JSON.stringify(datastr);
    wx.request({
      url: 'https://core.uuucai.com/ybd_core_interface/login',
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: datastr,
      success: function (res) {
        if (res.data.code == '200'){
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
        } else if (res.data.code == '425'){
          wx.showToast({
            title: '用户密码错误',
            icon: 'success',
            duration: 2000
          })
        } else if (res.data.code == '424') {
          wx.showToast({
            title: '用户不存在',
            icon: 'success',
            duration: 2000
          })
        } else if (res.data.code == '429') {
          wx.showToast({
            title: '密码错误',
            icon: 'success',
            duration: 2000
          })
        } else if (res.data.code == '440') {
          wx.showToast({
            title: '账户信息错误',
            icon: 'success',
            duration: 2000
          })
        } else if (res.data.code == '441') {
          wx.showToast({
            title: '账户已锁定',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  regBtnClick:function(){
    wx.navigateTo({
      url: '/pages/reg/reg'
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
    return {
      title: '登录页面',
      path: '/page/login/login'
    }
  }
})