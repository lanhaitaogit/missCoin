import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入前端样式框架ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入国际化组件i18n
import i18n from './tools/i18n'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
