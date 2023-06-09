import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/login', component: () => import('../views/login/Login.vue') },
    { path: '/main', component: () => import('../views/main/Main.vue') },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404/404.vue')
    }
  ]
});
