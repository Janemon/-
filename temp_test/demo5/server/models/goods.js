// 利用mongoose来代理mongodb接口使用
// 这个model的goods 是用来设置 schema 并且输出model接口
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var productSchema = new Schema({
  "productId":String,
  "productName":String,
  "salePrice":Number,
  "productImage":String,
})


module.exports = mongoose.model('Goods', productSchema)
