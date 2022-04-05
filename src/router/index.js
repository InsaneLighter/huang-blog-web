import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: (resolve) => require(['@/views/home'], resolve)
  },
  {
    path: '/doc',
    name: 'doc',
    component: (resolve) => require(['@/views/doc'], resolve)
  },
  // 嵌套路由需要在父组件中渲染子组件
  {
    path: '/doc/:id',
    name: 'document',
    component: (resolve) => require(['@/views/doc/document'], resolve)
  },
  {
    path: '/note',
    name: 'note',
    component: (resolve) => require(['@/views/note'], resolve)
  },
  {
    path: '/game',
    name: 'game',
    component: (resolve) => require(['@/views/game'], resolve)
  },
  {
    path: '/me',
    name: 'me',
    component: (resolve) => require(['@/views/me'], resolve)
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
