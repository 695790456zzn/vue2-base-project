import Vue from 'vue'
import VueRouter from 'vue-router'
import MyTest from '../pages/MyTest'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MyTest
  }
]

var router = new VueRouter({
  mode: 'history',
  routes
})

export default router;