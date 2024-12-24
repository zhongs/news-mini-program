const app = getApp()

Page({
  data: {
    banners: [],
    newsList: []
  },

  onLoad() {
    this.fetchBanners()
    this.fetchNewsList()
  },

  // 获取轮播图数据
  fetchBanners() {
    wx.request({
      url: `${app.globalData.baseUrl}/banners`,
      success: (res) => {
        if (res.data.code === 0) {
          this.setData({
            banners: res.data.data
          })
        }
      }
    })
  },

  // 获取新闻列表数据
  fetchNewsList() {
    wx.request({
      url: `${app.globalData.baseUrl}/news`,
      success: (res) => {
        if (res.data.code === 0) {
          this.setData({
            newsList: res.data.data
          })
        }
      }
    })
  },

  // 点击轮播图
  onBannerTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  // 点击新闻项
  onNewsTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})
