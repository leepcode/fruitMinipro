// pages/Purchase/Purchase.js
Page({
  data: {
    fruitprice: 0,
  },
  onLoad: function (option) {
    // 接收参数
    //console.log(option.sumPrice)
    this.setData({
      fruitprice: option.sumPrice
    })
  },

})
