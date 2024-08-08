import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/cuotas',
        name: 'cuotas',
        component: () => import('./cuotas/cuotasPage.vue'),
        meta:{
            requiresAuth:true,
        }
    },
];

export default routes;
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./pages/DashboardPage.vue'),
        meta: {
            requiresAuth: true,
        }
    },
];

export default routes;