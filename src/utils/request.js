
//根据搜索关键字发送请求
export default function (url,data={},method="GET") {
  return new Promise ((resolve,reject)=>{
    wx.request({
      url:"http://localhost:3000" + url,
      data,
      method,
      success:(res) => {
        //调用成功的回调函数
        console.log('成功了',res.data)
        resolve(res.data)
      },
      fail: () => {
        //调用失败的回调函数
        console.log('失败了')
        reject()
      }
    })
  })
}