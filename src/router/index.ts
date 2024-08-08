import { createRouter, createWebHistory } from 'vue-router'
import autenticacionRoutes from '../modules/auth/routes'

const router = createRouter({
  history: createWebHistory(/*import.meta.env.BASE_URL*/),
  routes: [
    ...autenticacionRoutes,

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../components/ui/NotFoundComponent.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const autenticacionLocalStorage = JSON.parse(localStorage.getItem('autenticacion') || '{}')
    if (!autenticacionLocalStorage['loginStatus']) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

