import Vue from 'vue'
import App from './App'


// 关闭提示
Vue.config.productionTip  = false

// 声明当前的组件代表整个应用
App.mpType = 'app'


// 生成实例

const app = new Vue(App)
// 挂载实例

app.$mount()


