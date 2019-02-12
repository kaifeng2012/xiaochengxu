
//在使用的View中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');
//index.js
Page({
  onTap:function(event){
    //console.log('onTap')
    wx.navigateTo({
      url: '../llCenter/llCenter'
    })
  }
 
})
