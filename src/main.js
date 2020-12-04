import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
// 全局配置iview的一些属性
//Vue.use(iView)
Vue.use(iView,{
  transfer:true,  // 将浮层放置在body内
  size:'large' // 设置所有带size属性的组件的尺寸
})
new Vue({
  render: h => h(App),
}).$mount('#app')
