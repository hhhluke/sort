import Vue from 'vue'
import Router from 'vue-router'

// 组件
import quickSort from './components/quickSort'
import bubbleSort from './components/bubbleSort'
import heapSort from './components/heapSort'
Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/',
        redirect: '/quickSort'
    }, {
        path: '/quickSort',
        component: quickSort
    }, {
        path: '/bubbleSort',
        component: bubbleSort
    }, {
        path: '/heapSort',
        component: heapSort
    }]
})
export default router