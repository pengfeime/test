import Vue from 'vue'
import App from './components/App.vue'
import './assets/fonts/iconfont.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import axios from 'axios'
import store from './store/store'
import router from './routes/router'
import qs from 'qs'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
// 全局配置iview的一些属性
Vue.use(iView,{
  transfer:true,  // 将浮层放置在body内
  size:'large' // 设置所有带size属性的组件的尺寸
})
new Vue({
  el:'#app',
  router, // 将router注册到根组件
  store, // 将store挂载到全局
  render:h => h(App)
})
