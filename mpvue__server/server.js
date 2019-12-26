let Koa = require('koa');
let KoaRouter = require('koa-router');
let jwt = require('jsonwebtoken');

let Fly = require("flyio/src/node")
let fly = new Fly;

// 生成应用
const app = new Koa();
const router = new KoaRouter()

router.get('/',  (ctx, next) => {
  ctx.body = 123;
});


// 搜索图书额接口
let datas = require('./datas/data.json')
router.get('/searchBooks', (ctx, next) => {
 // 1. 获取用户参数
  let req = ctx.query.req;
  console.log('获取的参数： ', req)
 // 2. 处理请求数据
 
 // 3. 返回响应数据
  ctx.body = datas
  
});

// 获取openId
router.get('/getOpenId', async (ctx, next) => {
  // 1. 准备数据: code, appId, appSecret
  let appId = 'wx810e8b1fde386fde';
  let appSecret = 'c0cf58da09e77cff4471ba496a616624';
  let code = ctx.query.code;
  
  // 发送请求同微信服务器
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  
  let response = await fly.get(url)
  console.log(response.data, typeof response.data);
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  let openId = JSON.parse(response.data).openid
  console.log('编译之前： ', openId);
  // 使用jsonwebtoken对openId加密生成token字段
  let token = jwt.sign(openId, 'atguigu')
  console.log('token: ', token);
  
  // 对token进行反编译
  let testId = jwt.verify(token, 'atguigu')
  console.log('编译之后： ',testId);
  ctx.body = token;
  
});




// 声明使用路由
app
  .use(router.routes())
  .use(router.allowedMethods())


app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址: http://localhost:3000');
})
