<template>
  <div id="listContainer">
    <swiper indicator-dots >
      <swiper-item v-for='(item,index) in newArr' :key='index'>
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="listContent">
      <div class="header">
        <span class="leftList">全部商品</span>
        <span class="rightList" @click="toBooksList">></span>
      </div>
      <ul class="booksList">
        <li class="booksItem" v-for='(bookItem,index) in booksList' :key='index'>
          <img :src="bookItem.image" alt="">
          <p>{{bookItem.title}}</p>
          <p>{{bookItem.author}}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
 import booksList from './datas/data.json'
  export default {
    data () {
      return {
        booksList:[]
      }
    },

    mounted () {
      this.booksList = booksList
    },

    computed:{
      newArr () {
        return [...this.booksList].splice(0,4)
      }
    },

    methods : {
      toBooksList () {
        wx.navigateTo({
          //由于booklist中要使用bookslist的数据,需要传递
          //url:'/pages/booksList/main?booksList='+JSON.stringify(this.booksList)
          url: '/pages/booksList/main?booksList=' + JSON.stringify(this.booksList)
        })
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#listContainer
    width 100%
    height 400rpx
    swiper
      width 100%
      height 400rpx
      img
        width 100%
    .header
      display flex
      margin-top 20rpx
      padding 0 30rpx
      .leftList
        width 98%
    .booksList
      display flex
      flex-wrap wrap
      .booksItem
        width 50%
        text-align center
        padding 20rpx 0
        box-sizing border-box
        border-bottom 1rpx solid #eee
        &:nth-child(2n + 1)
          border-right 1rpx solid #eee
        img
          width 200rpx
          height 200rpx
</style>
