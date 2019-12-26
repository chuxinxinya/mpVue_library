<template>
  <div id="searchContainer">
    <div class="header">
      <input @confirm="handleInput" v-model="inputContent" confirm-type="搜索" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span class="clear" v-show="inputContent" @click="clearInput">X</span>
    </div>
    <div> 
      <Bookslist :booksList='booksList'/>
    </div>
  
  </div>

</template>

<script type="text/ecmascript-6">
  import request from '../../utils/request'
  import Bookslist from '../booksList/index'
  export default {
    data () {
      return {
        inputContent: '',
        booksList:[]
      }
    },
    components:{
      Bookslist
    },

    methods : {
      clearInput () {
        console.log('2222')
        this.inputContent = ""
      },
      async handleInput () {
        //从状态中获取最新的数据
        let inputContent = this.inputContent
        //根据用户输入数据发送搜索的请求,并将请求回来的数据存入data
        this.booksList = await request('/searchBooks',{req: inputContent})
        console.log(this.booksList)

      }
      
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .header
      position relative
      width 80%
      height 60rpx
      margin 50rpx auto 
      border-bottom 1rpx solid #02a774
      input 
        width 100%
        height 100%
        .placeholder
          text-align center
          color #02a774
          font-size 28rpx
      .clear
        position absolute
        right 20rpx
        top 0
        line-height 60rpx
        z-index:99
 
</style>
