import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../views/Orders.vue'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import BuildingInfo from '../views/BuildingInfo.vue'
import Chess from '../views/Chess.vue'
import Events from '../views/Events.vue'
import Telemetry from '../views/Telemetry.vue'
import SmartHouse from '../views/SmartHouse.vue'
import News from '../views/News.vue'
import Monitoring from '../views/Monitoring.vue'
import Finance from '../views/Finance.vue'
import Calendar from '../views/Calendar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty'},
    component: Login
  },
  {
    path: '/building-info',
    name: 'BuildingInfo',
    meta: { layout: 'empty'},
    component: BuildingInfo
  },
  {
    path: '/',
    name: 'Orders',
    meta: {layout: 'main'},
    component: Orders
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    meta: {layout: 'main'},
    component: Monitoring
  },  
  {
    path: '/events',
    name: 'Events',
    meta: {layout: 'main'},
    component: Events
  },
  {
    path: '/finance',
    name: 'Finance',
    meta: {layout: 'main'},
    component: Finance
  },
  {
    path: '/calendar',
    name: 'Calendar',
    meta: {layout: 'main'},
    component: Calendar
  },
  {
    path: '/users',
    name: 'Users',
    meta: {layout: 'main'},
    component: Users
  },
  {
    path: '/chess',
    name: 'Chess',
    meta: {layout: 'main'},
    component: Chess
  },
  {
    path: '/news',
    name: 'News',
    meta: {layout: 'main'},
    component: News
  },
  {
    path: '/telemetry',
    name: 'Telemetry',
    meta: {layout: 'main'},
    component: Telemetry
  },
  {
    path: '/smartHouse',
    name: 'SmartHouse',
    meta: {layout: 'main'},
    component: SmartHouse
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
