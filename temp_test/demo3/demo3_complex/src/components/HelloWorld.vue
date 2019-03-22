<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Counter :pnum1="pnum1" pnum2="20" @increa="increament" @decrea="decreament"></Counter>  <!--子组件可流向父-->
    <h2>parent1: {{pnum1}}</h2>
    <h2>parent2:  20</h2>
  </div>
</template>

<script>
  import Counter from "./Counter"
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '父子组件通信的两种方式',
        pnum1: 10
      }
    },
    components:{
      Counter
    },
    methods:{
      increament(){
        this.pnum1++
      },
      decreament(){
        this.pnum1--
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
