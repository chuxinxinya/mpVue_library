<template>
  <div id="indexContainer">
    <swiper :indicator-dots="index !== 2" @change="handleChange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
    </swiper>
    <button class="btn" v-show="index === 2" @click="toList">开始体验</button>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        index:0
      }
    },

    methods : {
      //绑定图片滑动获取下标的事件
      handleChange (event) {
        //当图片滑动时获取下标
        //console.log(event)
        this.index = event.mp.detail.current
      },

      //绑定点击按钮跳转的事件
      toList () {
        wx.switchTab({
          url:'/pages/List/main'
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #indexContainer
    width 100%
    height 100%
    position relative
    swiper
      width 100%
      height 100%
      img 
        width 100%
        height 100%
    .btn
      position  absolute
      bottom 20rpx
      left 50%
      margin-left -150rpx
      width 300rpx
      height 80rpx
      background-color rgba(255, 255, 255, 0.4)
      
 
</style>
