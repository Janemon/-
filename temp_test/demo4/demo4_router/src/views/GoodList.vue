<template>
  <div>
    <h1>{{msg}}</h1>
    <!--<sapn>params: goodsID is &nbsp {{$route.params.goodsID}}</sapn></br>-->
    <!--<sapn>params: name is &nbsp {{$route.params.name}}</sapn>--> <!--获取动态路由的参数-->
    <router-link to="/goods/title">显示商品标题</router-link>  <!--这里必须得有字才能显示-->
    <router-link to="/goods/img">显示商品图片</router-link><br/>
    <button @click="jump">点击跳转到购物车列表</button>  <!--这是编程式路由-->
    <router-link :to="{name: 'cart', params: {cartID: 123}}">显示购物车页面</router-link>  <!--这是命名路由跳转，注意的是这是用对象来写的, 而且是必须得绑定to-->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: '这是商品列表页面'
      }
    },
    methods:{
      jump(){
        // this.$router.push('/cart')
        // this.$router.push({path: '/cart'})
        // this.$router.push({path: '/cart', query:{goodsID: 123}})
        this.$router.push('/cart?goodsID=123')

      }
    }
  }
</script>
