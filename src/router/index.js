import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../pages/MyTest')
  }
]

var router = new VueRouter({
  mode: 'history',
  routes
})

export default router;