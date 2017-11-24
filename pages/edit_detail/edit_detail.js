// pages/edit_detail/edit_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  getAvator: function (event) {
    var that = this;
    console.log(this)
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            // console.log(res.width)
            // console.log(res.path)
            that.setData({
              avator: res.path
            });
            
          }
        })
        wx.uploadFile({
          url: 'https://core.uuucai.com/ybd_core_interface/pic', 
          filePath: tempFilePaths[0],
          name: 'fileToUpload',
          formData: {
            'type': 3,
            'refid': '100093',
            'fileToUpload': res.path
          },
          success: function (resp) {
            var data = resp.data
            console.log(resp)
          }
        })
      }
    })
  },
  // postAvator:function(){
  //   wx.request({
  //     url: 'https://core.uuucai.com/ybd_core_interface/pic',
  //     data: {
  //       type: 3,
  //       refid: '100093',
  //       fileToUpload: res.path
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res.data)
  //     }
  //   })
  // },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      moid: options.moid
    })
    console.log(this)
    console.log(options)
    console.log(options.moid)
  },
  formSubmit: function (e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value.name)
    var businessStrs = e.detail.value.business1 + ' ' + e.detail.value.business2 + ' ' + e.detail.value.business3 + ' ' + e.detail.value.business4,
      identityStrs = e.detail.value.identity1 + ' ' + e.detail.value.identity2 + ' ' + e.detail.value.identity3 + ' ' + e.detail.value.identity4,
      strings,
      key,
      identityArr;
    //分解成数组
    console.log(businessStrs)
    console.log(identityStrs)
    console.log(e)
    var identityArr = identityStrs.split(' ')
    var businessArr = businessStrs.split(' ')

    var identityStr = identityArr.join(",")
    var businessStr = businessArr.join(",")

    if (!(e.detail.value.identity1 && e.detail.value.business1 && e.detail.value.name)) {
      wx.showToast({
        title: '不能为空',
        duration: 2000
      })
      return
    }
    // strings = identityArr.join(",")
    // console.log(strings)
    if (e.detail.target.offsetLeft > 200) {
      status = 1
    }
    else {
      status = 0
    }
    wx.request({
      url: 'https://core.uuucai.com/ybd_core_interface/web', //仅为示例，并非真实的接口地址
      data: {
        data: {
          method: 'saveweb',
          ycid: '100093',
          name: e.detail.value.name,
          content: e.detail.value.content,
          identity: identityStr,
          business: businessStr,
          mould: this.data.moid,
          status: status
        }
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          mesages: res.data.data
        });
        wx.switchTab({
          url: '/pages/preson/preson',
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
          } 
        })
        console.log(res.data);
      }
    })

  },
  // save:function(e){
  //   var that = this;
    // wx.request({
    //   url: 'https://core.uuucai.com/ybd_core_interface/web', //仅为示例，并非真实的接口地址
    //   data: {
    //     method: 'saveweb',
    //     ycid: '100093',
    //     name: that.userNameInput,
    //     content: that.introInput,
    //     identity: that.useridInput,
    //     business: that.buessInput,
    //     mould:'2'
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   method:'POST',
    //   success: function (res) {
    //     that.setData({
    //       mesages: res.data.data
    //     });
    //     console.log(res.data.data);
    //   }
    // })
  //   console.log(e.detail.value);
  // },
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