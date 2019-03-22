// 这个才是真正第一页
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--</router-view>  装载一级路由-->
    <router-view class="main"></router-view>  <!--这里是命名式路由，name-->
    <router-view class="left" name="title"></router-view>
    <router-view class="right" name="img"></router-view>
  </div>
</template>

<script>
export default {  // 组件都需要导出才能使用
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left, .right{
  float: left;
  width: 48%;
  border: 1px solid grey;
}
</style>
