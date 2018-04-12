import Vue from 'vue'
import Router from 'vue-router'

// 组件
import quickSort from './components/quickSort'

Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/',
        redirect: '/quickSort'
    }, {
        path: '/quickSort',
        component: quickSort
    }]
})
export default router