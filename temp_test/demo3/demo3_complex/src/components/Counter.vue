<template>
  <div>
    <h5>Son has two button</h5>
    <button id="add" @click="increament">+</button>
    <button id="sub" @click="decreament">-</button>
    <p>{{msg}}</p>
    <span>Son, but click then parent pass pnum1: {{pnum1}} ("父子双向通信")</span></br>
    <span>Son, but click then parent pass pnum2: {{pnum2}} ("只有父单向通信")</span></br>
    <span>Son only: {{num}}</span>
  </div>
</template>
<script>
  export default{
    props:["pnum1", "pnum2"],
    data(){
      return{
        num: 0,
        msg: "See ^_^!!"
      }
    },
    methods:{
      increament(){
        this.num++  // 只能在组件内部变化
        this.$emit("increa")  // 可以向父组件通信
      },
      decreament(){
        this.num--
        this.$emit("decrea")
      }
    }

  }
</script>
