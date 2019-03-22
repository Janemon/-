<template>
  <div>
    <sapn>{{msg}}</sapn><br/>
    <span>{{$route.query.goodsID}}</span>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg: "这是购物车页面"
      }
    }
  }
</script>
