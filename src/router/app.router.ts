import { createRouter, createWebHistory } from 'vue-router'
import autenticacionRoutes from '../modules/auth/routes'
import dashboardRoutes from '../modules/dashboard/routes'
import becasRoutes from '../modules/credito-interno/becas/routes'
import creditosRoutes from '../modules/credito-interno/credito/routes'
import cuotasRoutes from '../modules/credito-interno/cuotas/routes'
import fechasPagoRoutes from '../modules/credito-interno/fechas-acceso/routes'
import periodosRoutes from '../modules/credito-interno/periodos/routes'

const router = createRouter({
  history: createWebHistory(/*import.meta.env.BASE_URL*/),
  routes: [
    ...autenticacionRoutes,
    ...dashboardRoutes,
    ...becasRoutes,
    ...creditosRoutes,
    ...cuotasRoutes,
    ...fechasPagoRoutes,
    ...periodosRoutes,

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../components/ui/NotFoundComponent.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const autenticacionObjLocalStorage = JSON.parse(localStorage.getItem('credito-interno') || '{}')
    const isLogged = typeof autenticacionObjLocalStorage === 'undefined' ? false : autenticacionObjLocalStorage.isLogged;
    if (!isLogged && from.path !== '/') {
      next({ name: 'login' })
      return;
    }
    next();
  } else {
    next()
  }
})

export default router

