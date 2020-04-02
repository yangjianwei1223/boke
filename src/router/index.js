import Vue from 'vue'
import Router from 'vue-router'
import allRouters from './allRouters.js';

Vue.use(Router)
// console.log(...allRouters)
// const routerList = [];
// function importAll (r) {
//     r.keys().forEach(
//         key => routerList.push(r(key).default)
//     );
// }

// importAll(require.context('@/view', true, /router.js$/))
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        ...allRouters
    ]
})