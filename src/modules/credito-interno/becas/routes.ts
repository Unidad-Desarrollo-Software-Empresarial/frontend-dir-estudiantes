import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/becas',
        name: '/becas',
        children: [
            {
                path: '/aceptacion-categoria',
                name: 'aceptacion-categoria',
                component: () => import('./pages/AceptacionCategoriaPage.vue')
            }
        ]
    },
];

export default routes;