Page({
  data: {
    userInfo: null
  },

  onLoad() {
    // 获取用户信息
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },

  handleLogin() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },

  handleCollect() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  handleHistory() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  handleFeedback() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  handleAbout() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  }
})
