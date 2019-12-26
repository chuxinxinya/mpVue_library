<template>
  <div id="booksListContainer">
    <div class="bookItem" v-for='(bookItem,index) in booksList' :key='index'>
      <img class="bookImg" :src="bookItem.image" alt="">
      <div class="bookInfo">
        <p>{{bookItem.title}}</p>
        <p>{{bookItem.author}}</p>
        <p>{{bookItem.publisher}}</p>
      </div>
      <p class="bookPrice">{{bookItem.price}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
   props: {
      booksList: {
        required: true,
        type: Array,
        default: []
      }
    },

    data () {
      return {
        booksList:[]
      }
    },

    mounted () {
      if(this.$mp){
         this.booksList = JSON.parse(this.$mp.query.booksList)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksListContainer
    .bookItem
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      .bookImg
        width 140rpx
        height 140rpx
        margin-right 20rpx
      .bookInfo
        width 60%
        font-size 30rpx
        line-height 50rpx
      .bookPrice
        font-size 34rpx
        font-weight bold
        color red
</style>
