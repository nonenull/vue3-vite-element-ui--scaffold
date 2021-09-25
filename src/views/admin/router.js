export default [
    {
        path: '/admin',
        component: () => import('/src/views/admin/components/Admin.vue'),
        children: [
            {
                path: 'fuck',
                component: () => import('/src/views/admin/components/Fuck.vue'),
                children: [

                ]
            }
        ]
    }
]
