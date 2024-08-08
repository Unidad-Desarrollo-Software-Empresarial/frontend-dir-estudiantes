import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CuotasPage from '../modules/credito-interno/cuotas/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...CuotasPage,
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../modules/credito-interno/cuotas/routes'),
    },
     
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    
  ]
})

export default router
