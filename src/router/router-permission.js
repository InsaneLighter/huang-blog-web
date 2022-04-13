import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
    if (to.meta.title) {
        document.title = 'Huang'  + ' - ' + to.meta.title
    }

    NProgress.start()
    //TODO 暂时直接放行,路由权限拦截暂未集成
    next()
    NProgress.done()
})

router.afterEach(() => {
    NProgress.done()
})

