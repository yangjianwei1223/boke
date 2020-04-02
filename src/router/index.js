import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import numautoplus from '../view/numautoplus'
import empty from '../components/empty';

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/js',
            component: empty,
            children: [
                {
                    path: 'numautoplus',
                    component: numautoplus
                }
            ]
        }
    ]
})