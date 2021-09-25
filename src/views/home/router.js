export default [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        component: () => import('/src/views/home/components/Dashboard.vue'),
    },
    {
        path: '/navigation',
        component: () => import('/src/views/home/components/Navigation.vue'),
    },
]
