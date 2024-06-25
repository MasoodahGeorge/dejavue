import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardComp from '../components/CardComp.vue'
import ConsolesView from '../views/ConsolesView.vue'
import CarsView from '../views/CarsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: CardComp
  },
  {
    path: '/consoles',
    name: 'consoles',
    component: ConsolesView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
