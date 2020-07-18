import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/login'

Vue.use(VueRouter)

  const routes = [
  {
    name:'Login',
    path: '/Login',
    component:Login
  },

]

const router = new VueRouter({
  routes
})

export default router
