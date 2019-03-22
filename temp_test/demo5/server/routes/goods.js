// 这里是Express定义的接口文件, 使用了mongoose定义的schema和暴露的model
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Goods = require('../models/goods')

mongoose.connect('mongodb://127.0.0.1:27017/dumall') // 链接数据库

mongoose.connection.on("connected", ()=>{  // 监听数据库
  console.log("MongoDB connected success")
})
mongoose.connection.on("error", ()=>{
  console.log("MongoDB connected fail")
})
mongoose.connection.on("disconnected", ()=>{
  console.log("MongoDB connected disconnected")
})

router.get("/", (req, res, next)=>{  // 定位到这里 / 根目录下, 然后传输数据
  // 价格排序
  let page = parseInt(req.param("page"), 10)  // 相对于 node.js 的 req.url
  let pageSize = parseInt(req.param("pageSize"), 10)
  let sort = req.param("sort") // 1 是升 -1 是降
  let skip_data_num= (page-1)*pageSize
  let params = {}
  let goodsModel = Goods.find(params).skip(skip_data_num).limit(pageSize)  // 在Goods这个路由中查找数据, 奇怪的是空对象(其实说明他查的是对象)
  goodsModel.sort({"salePrice": sort})
  goodsModel.exec({}, (err, data)=>{  // 执行操作
    if(err){
      res.json({
        status: '1',
        msg: err.message
      })
    }else{
      res.json({
        status: '0',
        msg:'',
        result: {
          count: data.length,
          list: data
        }
      })
    }
  })
})

module.exports = router
