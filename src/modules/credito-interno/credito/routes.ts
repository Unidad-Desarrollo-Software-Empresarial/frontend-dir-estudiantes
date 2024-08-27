import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/creditos-internos',
        name: '/creditos-internos',
        children: [
            {
                path: '/creditos-internos-administrativos',
                name: '/creditos-internos-administrativos',
                component: () => import('./pages/CreditosAdministrativoPage.vue')
            },
            {
                path: '/creditos-internos-estudiante',
                name: '/creditos-internos-estudiante',
                component: () => import('./pages/CreditosEstudiantesPage.vue'),
                children: [
                    {
                        path: '/crear-creditos-internos-estudiante',
                        name: '/crear-creditos-internos-estudiante',
                        component: () => import('./pages/CrearCreditoEstudiantePage.vue'),
                    }
                ]
            },
        ]
    },
];

export default routes;