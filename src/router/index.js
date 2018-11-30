import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../commponents/login/login.vue'
import Login from '@/commponents/login/login.vue'
import Home from '@/commponents/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },{
      name: 'home',
      path: '/',
      component: Home
    }
  ]
})
