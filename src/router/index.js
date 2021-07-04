import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'detail/:id',
        component: () => import('../views/Detail.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/CartIndex.vue'),
          },
          {
            path: 'profile',
            component: () => import('../views/Profile.vue'),
          },
          {
            path: 'order/:id',
            component: () => import('../views/Order.vue'),
          },
        ],
      },
      {
        path: 'success',
        component: () => import('../views/CheckoutSuccess.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/admin/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/OrderList.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue'),
      },
      {
        path: 'test',
        // component: () => import('../../components/ToastMessage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
