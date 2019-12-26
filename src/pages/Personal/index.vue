<template>
  <div id="personalContainer">
    <div class="header">
      <img :src="userInfo.avatarUrl ? userInfo.avatarUrl : '/static/imgs/personal/personal.png'" alt="">
      <button open-type="getUserInfo" class="btn" @getuserinfo="handleGetUserInfo">{{userInfo.nickName ? userInfo.nickName : '登录'}}</button>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        userInfo : {}
      }
    },

    mounted () {
      wx.getUserInfo({
        success: (res) => {
          //初始化显示时尝试从缓存中读取
          this.userInfo = res.userInfo
        },
        fail : () => {
          console.log('请登录')
        }
      })
    },

    methods : {
      handleGetUserInfo (res) {
        //将数据存入data
        this.userInfo = res.mp.detail.userInfo || {}
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .header
      padding 40rpx
      background-color #02a774
      img 
        width 100rpx
        height 100rpx
        border-radius 50%
        margin-right 40rpx
        vertical-align middle
      .btn
        display inline-block
        height 60rpx
        line-height 60rpx
        text-align center
        background-color rgba(0,0,0,0.2)
        color #fff
        vertical-align middle
 
</style>
