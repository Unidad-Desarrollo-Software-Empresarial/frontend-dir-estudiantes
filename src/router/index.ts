import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/credito',
      name: 'credito',
      component: () => import('../modules/credito-interno/credito/pages/ProcessPage.vue')
    }
  ]
});

export default router;
