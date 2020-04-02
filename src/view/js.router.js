
const numautoplus = () => import('./numautoplus.vue')
const empty = () => import('../components/empty.vue')

export default {
    path: '/js',
    component: empty,
    children: [
        {
            path: 'numautoplus',
            component: numautoplus
        }
    ]
}