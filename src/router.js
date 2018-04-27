import Vue from 'vue'
import Router from 'vue-router'

// 组件
import quickSort from './components/quickSort'
import bubbleSort from './components/bubbleSort'
import heapSort from './components/heapSort'
import mergeSort from './components/mergeSort'
import insertSort from './components/insertSort'
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
    }, {
        path: '/mergeSort',
        component: mergeSort
    }, {
        path: '/insertSort',
        component: insertSort
    }]
})
export default router