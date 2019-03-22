// 这个是路由指向和核心功能js文件
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/views/GoodList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
// 和Python的import不一样, 倒回来了

Vue.use(Router) // 使用路由器必须要use，而且是唯一一个

export default new Router({
  module: 'history',  // 默认为hash也就是 #/
  routes: [ // 这是一级路由导向app页呈现; 一级路由表的地址就是我们所有路由的根地址, 一般为 / 因为这是直接在页面上呈现了
    //    {
    // path: '/goods',
    // name: 'goodlist',  // 名字
    // component: GoodList  // 页面(组件)

    // path:'/goods/:goodsID',  // 这是动态路由，所谓动态，这里指的是有我们自己去改改输入
    // name: 'goodlist',
    // component: GoodList

    // path:'/goods/:goodsID/user/:name',  // 这是动态路由, 注意路径必须得符合设定的才能显示
    // name: 'goodlist',
    // component: GoodList,

    // path: '/goods',
    // name: 'goodlist',
    // component: GoodList,
    // children: [
    // {
    // path: 'title',
    // component: Title
    // },
    // {
    // path: 'img',
    // component: Image
    // }
    // ]
    // }  // 这是嵌套路由
    //    }

    // {
      // path: '/',
      // components: {  // 这是命名式路由，注意这里是对象的写法
        // default: GoodList,
        // title: Title,
        // img: Image
      // }
    // },

    {  // 这是编程式路由
      path: '/cart:cartID',
      name: 'cart',
      component: Cart
    }
  ]
})
