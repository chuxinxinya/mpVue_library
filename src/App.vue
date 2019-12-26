<script>
import request from "./utils/request";
import { async } from 'q';
export default {

  mounted() {
    wx.login({
      success : async(res) => {
        //获取code
        console.log(res)
        let code = res.code
        //携带code发请求,使用封装好的请求函数
        let token = await request('/getOpenId',{code})
        //将获取到的token保存进storage中
        wx.setStorage({
          key:"token",
          data:token
        })
        
      }
    })
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  page
    width 100%  
    height 100%

</style>
