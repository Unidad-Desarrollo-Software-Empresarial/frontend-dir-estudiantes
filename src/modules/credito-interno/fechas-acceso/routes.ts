import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/fechas-pago',
        name: '/fechas-pago',
        children: [
            {
                path: '/configuracion-fechas-pago',
                name: '/configuracion-fechas-pago',
                component: () => import('./pages/ConfiguracionFechasPagoPage.vue')
            },

        ]
    },
];

export default routes;