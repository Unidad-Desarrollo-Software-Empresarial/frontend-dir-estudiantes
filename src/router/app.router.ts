import { createRouter, createWebHistory } from 'vue-router'
import autenticacionRoutes from '../modules/auth/routes'
import dashboardRoutes from '../modules/dashboard/routes'

const router = createRouter({
  history: createWebHistory(/*import.meta.env.BASE_URL*/),
  routes: [
    ...autenticacionRoutes,
    ...dashboardRoutes,

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

