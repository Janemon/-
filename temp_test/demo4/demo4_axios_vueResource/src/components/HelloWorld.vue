<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <a href="javascript:;" @click="get">get请求</a>
    <a href="javascript:;" @click="post">post请求</a>
    <a href="javascript:;" @click="http">http请求</a>
    <p>{{showtext}}</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'test axios and vue-resource',
        showtext:""
      }
    },
    methods:{
      get(){
        this.$http.get("http://httpbin.org/get", {
          params:{  // 只有get时，才需要params，post直接写就行了
            userId: 2323
          },
          headers:{
            token: "chen"
          }
        }).then(res=>{
          this.showtext = res.data
        }).catch(error=>{
          console.log("错误"+error)
        })
      },
      post(){
        this.$http.post("http://httpbin.org/post", {
          userId: 3232
        },{
          headers:{
            token:"Tom"
          }
        }).then(res=>{
          this.showtext =res.data
        }).catch(err=>{
          console.log("错误"+error)
        })
      },
      http(){
        this.$http({
          url: "http://httpbin.org/post",
          method: "post",
          data: {
            userId: "007"
          },
          headers:{
            label: "http_get"
          }
        }).then(res=>{
          this.showtext =res.data
        }).catch(err=>{
          console.log("错误"+error)
        })
      }
    },
    mounted(){
      this.$http.interceptors.request.use(config=>{  // 这是全局拦截器
        console.log("request init!")
        return config;
      })
      this.$http.interceptors.response.use(res=>{
        console.log("response init!")
        return res;
      })
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
