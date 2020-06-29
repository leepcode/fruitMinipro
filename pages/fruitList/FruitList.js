
//注册一个界面
// pages/fruitsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitList: [
      { name: "香蕉", number: 10, price: 1, buynbr: 0, image: '../../image/banana.jpg' },
      { name: "苹果", number: 10, price: 3, buynbr: 0, image: '../../image/apple.jpg' },
      { name: "橘子", number: 10, price: 2, buynbr: 0, image: '../../image/orange.jpg' },
      { name: "芒果", number: 10, price: 4, buynbr: 0, image: '../../image/mango.jpg' },
    ],
    sum: 0
  },

  handlePushBtn: function () {
    //页面跳转
    wx.navigateTo({
      url: '/pages/Purchase/Purchase?sumPrice=' + this.data.sum
    })
  },

  //减少数量
  decrease: function (e) {
    var dataset = e.currentTarget.dataset;
    var index = dataset.index;
    let fruit = this.data.fruitList;
    let total = this.data.sum;
    let num = fruit[index].buynbr;
    if (num == 0) {
      wx.showToast({ title: '不能再减了~', icon: 'none' })
      return;
    }
    num = num - 1;
    fruit[index].buynbr = num;
    fruit[index].number = fruit[index].number + 1;
    total = total - fruit[index].price;
    this.setData({ 
      fruitList: fruit,
      sum: total
     });
  },

  // 增加数量 
  increase: function (e) {
    var dataset = e.currentTarget.dataset;
    var index = dataset.index;
    let fruit = this.data.fruitList;
    let total = this.data.sum;
    let num = fruit[index].buynbr;
    if (fruit[index].number == 0) {
      wx.showToast({ title: '不能再加了~', icon: 'none' })
      return;
    }
    num = num + 1;
    fruit[index].buynbr = num;
    fruit[index].number = fruit[index].number - 1;
    total = total + fruit[index].price;
    this.setData({ 
      fruitList: fruit,
      sum: total
     });
  },

  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (option) {
  }
})