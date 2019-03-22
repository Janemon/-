// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这个是入口JavaScript文件, 挂载 HTML主页 #app上
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },  // 声明有那些组件
  template: '<App/>'  // 使用了什么模板
})
