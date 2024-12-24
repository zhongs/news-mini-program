const app = getApp()

Page({
  data: {
    news: null
  },

  onLoad(options) {
    const { id } = options
    this.fetchNewsDetail(id)
  },

  fetchNewsDetail(id) {
    wx.request({
      url: `${app.globalData.baseUrl}/news/${id}`,
      success: (res) => {
        if (res.data.code === 0) {
          this.setData({
            news: res.data.data
          })
        }
      }
    })
  }
})
