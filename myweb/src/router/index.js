import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import News from './components/News.vue'
// import Products from './components/Products.vue'
// import About from './components/About.vue'
// import Stores from './components/Stores.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/About.vue')
  },
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: () =>
  //     import('../views/Products.vue')
  // },
  // {
  //   path: './stores',
  //   name: 'stores',
  //   component: () =>
  //     import('../views/Stores.vue')
  // },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: () =>
  //     import('../views/News.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
