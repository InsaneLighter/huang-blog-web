import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index')
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('../views/doc/index')
  },
  // 嵌套路由需要在父组件中渲染子组件
  {
    path: '/doc/:id',
    name: 'document',
    component: () => import('../views/doc/document')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/note/index')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/game/index')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/me/index')
  }
]
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router
