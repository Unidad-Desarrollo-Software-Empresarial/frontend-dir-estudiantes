import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/cuotas',
        name: '/cuotas',
        children: [
            {
                path: '/configuracion-cuotas',
                name: '/configuracion-cuotas',
                component: () => import('./pages/ConfiguracionCuotasPage.vue')
            },

        ]
    },
];

export default routes;