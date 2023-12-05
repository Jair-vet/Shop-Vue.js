import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopViews.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => AdminLayout,
      children: [
        {
          path: 'productos',
          component: () => import('../views/admin/ProductsView.vue')
        }
      ]
    },
    
  ]
})

export default router
