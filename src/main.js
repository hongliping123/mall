import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'
import MyServerHttp from './plugins/http,js'

Vue.config.productionTip = false

//引入 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(MyServerHttp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
