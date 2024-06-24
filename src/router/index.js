// // import { createRouter, createWebHistory } from 'vue-router'
// // import HomeView from '../views/HomeView.vue'
// // import CarsView from '../views/CarsView.vue'
// // import FriendsView from '../views/FriendsView.vue'
// // import ConsolesView from '../views/ConsolesView.vue'

// // const routes = [
// //   {
// //     path: '/',
// //     name: 'home',
// //     component: HomeView
// //   },
// //   {
// //     path: '/about',
// //     name: 'about',
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// //   },
// //   {
// //     path: '/cars',
// //     name: 'cars',
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () => import(/* webpackChunkName: "about" */ '../views/CarsView.vue')
// //   },
// //   {
// //     path: '/friends',
// //     name: 'friends',
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () => import(/* webpackChunkName: "about" */ '../views/FriendsView.vue')
// //   },
// //   {
// //     path: '/consoles',
// //     name: 'consoles',
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () => import(/* webpackChunkName: "about" */ '../views/ConsolesView.vue')
// //   }
// // ]

// // const router = createRouter({
// //   history: createWebHistory(process.env.BASE_URL),
// //   routes
// // })

// // export default router

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import FriendsView from '@/views/FriendsView.vue';
// import CarsView from '@/views/CarsView.vue';
// import ConsolesView from '@/views/ConsolesView.vue';

// Vue.use(VueRouter);

// const routes = [
//   { path: '/', redirect: '/friends' },
//   { path: '/friends', component: FriendsView },
//   { path: '/cars', component: CarsView },
//   { path: '/consoles', component: ConsolesView },
// ];

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;


import Vue from 'vue';
import VueRouter from 'vue-router';
import FriendsView from '@/views/FriendsView.vue';
import CarsView from '@/views/CarsView.vue';
import ConsolesView from '@/views/ConsolesView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/friends' },
  { path: '/friends', component: FriendsView },
  { path: '/cars', component: CarsView },
  { path: '/consoles', component: ConsolesView },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
