import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../modules/dashboard/pages/DashboardPage.vue'; // Asegúrate de que esta ruta sea correcta

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: '/dashboard',  // Corrige la ruta del dashboard para que sea minúscula
      name: 'dashboard',
      component: DashboardPage
    },
 
  ]
});

export default router;
