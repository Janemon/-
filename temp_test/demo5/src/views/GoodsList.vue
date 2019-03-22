<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span slot="goods">Goods</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <!-- sort -->
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" :class="{'cur':price_range=='all'}" @click="price_range='all'">All</a></dd>
              <dd v-for="(price, index) in priceFilter">
              <a href="javascript:void(0)" :class="{'cur':price_range==index}"  @click="setPriceFilter(index)">{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item, index) in goodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="'../static/'+item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" class="scrolloading">
              加载中...
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import "../assets/css/base.css"  // css 样式是可以在 script 中导入的
  import "../assets/css/product.css"
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import NavBread from '@/components/NavBread'
  export default {
    data(){
      return {
        "goodsList": [],
        "priceFilter": [
          {
            startPrice: '0.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '3000.00'
          }
        ],
        "price_range": 'all',
        "filterBy": false,
        "overLayFlag": false,
        "sortFlag": true,
        "page": 1,
        "pageSize": 8,
        "busy": false
      }
    },
    components:{
      NavHeader,  // 自动解析key和value都一样的形式
      NavFooter,
      NavBread
    },
    mounted(){
      this.getGoodsList()
    },
    methods:{
      getGoodsList(flag){  // 这个flag代表数据是否需要累加
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag?1:-1
        }
        this.$http.get("/goods", {params: param}).then((result)=>{ // 这里的goods是Express代理的路由,所以必须要在config/index.js 配置代理, 数据的加入必须得加一个 param
          var resp = result.data
          if(resp.status == '0'){
            if(flag){
              this.goodsList = this.goodsList.concat(resp.result.list) 
              if(resp.result.count == 0){
                this.busy = true
              }else{
                this.busy = false
              }
            }else{
              this.goodsList = resp.result.list
              this.flag = true
            }
          }else{
            this.goodsList = []
          }
        })
      },
      showFilterPop(){
        this.filterBy = true
        this.overLayFlag = true
      },
      setPriceFilter(index){
        this.priceChecked = index
        this.closePop()
      },
      closePop(){
        this.filterBy = false
        this.overLayFlag = false
      },
      sortGoods(){
        this.sortFlag = !this.sortFlag,
          this.page = 1,
          this.getGoodsList()
      },
      loadMore(){
        this.busy = true
        setTimeout(() => {  // 推入macrostack中，阻止无限加载,达到一个一个加载的目的
          this.page++
          this.getGoodsList(true)  // 一开始默认需要数据累加，因为这个是加载商品列表
        }, 500);
      }
    }
  }
</script>
<style>
  .scrolloading{
      height: 100px;
      line-height: 100px;
      text-align: center;
  }
</style>
