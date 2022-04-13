import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index'),
    meta: { title: 'Home' }
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('../views/doc/index'),
    meta: { title: 'Article' }
  },
  // 嵌套路由需要在父组件中渲染子组件
  {
    path: '/doc/:id',
    name: 'document',
    component: () => import('../views/doc/document'),
    meta: { title: 'Articles' }
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/note/index'),
    meta: { title: 'Note' }
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/game/index'),
    meta: { title: 'Game' }
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/me/index'),
    meta: { title: 'Me' }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('../views/exception/403'),
    meta: { title: 'NotAuthorized' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/exception/404'),
    meta: { title: 'NotFound'}
  },
  {
    path: '/500',
    name: '500',
    component: () => import('../views/exception/500'),
    meta: { title: 'ServerWrong'}
  },
  //以上路由均不匹配则重定向入404页面
  {
    path: '/:patch(.*)',
    redirect: "/404"
  }
]
const router = createRouter({
  history: createWebHistory("/"),
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router
