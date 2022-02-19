import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Manage from '@/views/Manage.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/manage',
    meta: {
      requiresAuth: true,
    },
    name: 'manage',
    component: Manage,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
