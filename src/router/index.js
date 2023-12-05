import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShopView
    },
    
  ]
})

export default router
