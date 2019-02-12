const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
     
    }],
  },
  onLoad: function (option) {
    var that = this
    var imgpath = app.globalData.imgpath
    //console.log(imgpath);
    this.setData({
      img: imgpath,
    });
    var centerid = option.id;
    var latitude = option.latitude;
    var longitude = option.longitude;
    wx.request({
      url: app.globalData.rootPath + '/centerController/getCenter?centerid=' + centerid + '&latitude=' + latitude + '&longitude=' + longitude,
      method: 'GET',
      success: function (res) {
       // console.log(res);
        //console.log(res.data.center_introduce);
        var content = res.data.center_introduce;
        //var imgUrl = imgpath + content.attr.src;
        var contents = content.replace(/<\/?(a|p|span)[^>]*>/gi, '');
        
       // console.log(imgUrl);
        console.log(contents);
        that.setData({
          center: res.data,
          tt: contents,
          //content: center.center_introduce.replace(/<[^>]+>|&[^>]+;/g, ""),
         // contents: content.replace(/ /ig, ''),
          markers: [{
            iconPath: "/images/marker.png",
            id: 1,
            latitude: res.data.latitude,
            longitude: res.data.longitude,
          }],
        });
        

       

        
      }
    })
   
  },

  backClick: function(e){
    wx.navigateBack({ changed: true });
  },

  callphone: function (event) {
    var phone = event.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone 
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