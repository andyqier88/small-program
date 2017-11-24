// pages/preson/preson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showhide:true,
    delhide:false
  },
  showeclose:function(){
    var that = this;
    that.setData({
      showhide: (!that.data.showhide)
    })
  },
  // onLaunch: function () {
  //   wx.login({
  //     success: function (res) {
  //       if (res.code) {
  //         //发起网络请求
  //         wx.request({
  //           url: 'https://test.com/onLogin',
  //           data: {
  //             code: res.code
  //           }
  //         })
  //       } else {
  //         console.log('获取用户登录态失败！' + res.errMsg)
  //       }
  //     }
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var value = wx.getStorageSync('ycid')
    if (value) {
      console.log(value)
      // Do something with return value
      wx.request({
        url: 'https://core.uuucai.com/ybd_core_interface/web?method=queryweblist&ycid='+ value, //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            mylistArr: res.data.data
          });
          console.log(res.data.data);
        }
      })
    } else {
      wx.redirectTo({
        url: '../login/login'
      })
    }
    // wx.getStorage({
    //   key: 'ycid',
    //   success: function (res) {
    //     console.log(res)
    //     if(res.data){
    //       wx.request({
    //         url: 'https://core.uuucai.com/ybd_core_interface/web?method=queryweblist&ycid=100093', //仅为示例，并非真实的接口地址
    //         header: {
    //           'content-type': 'application/json'
    //         },
    //         success: function (res) {
    //           that.setData({
    //             mylistArr: res.data.data
    //           });
    //           console.log(res.data.data);
    //         }
    //       })
    //     }
    //   },
    //   fail:function(res){
    //     console.log(res)
    //     wx.redirectTo({
    //       url: '../login/login'
    //     })
    //   }
    // })
    var that = this;
    
  },
  delmyperson:function(e){
    console.log(e)
    var that = this;
    wx.request({
      url: 'https://core.uuucai.com/ybd_core_interface/web', //仅为示例，并非真实的接口地址
      method:"POST",
      data: {
        data: {
          method: 'delweb',
          id: e.currentTarget.dataset.id
        }
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          delhide:!that.data.delhide
        });
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