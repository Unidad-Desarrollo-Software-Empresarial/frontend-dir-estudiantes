import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/periodos',
        name: '/periodos',
        children: [
            {
                path: '/configuracion-periodos',
                name: '/configuracion-periodos',
                component: () => import('./pages/ConfiguracionPeriodosPage.vue')
            },

        ]
    },
];

export default routes;