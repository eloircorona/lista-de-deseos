import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() { return { x: 0, y: 0 } }, 
  base: process.env.BASE_URL,
  routes
})

export default router
