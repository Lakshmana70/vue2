import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productdetails from '@/components/productdetails.vue'
import("../../node_modules/bootstrap/dist/js/bootstrap.bundle")
import("../../node_modules/bootstrap-vue/node_modules/bootstrap/dist/js/bootstrap.bundle")
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/lak',
      component:Productdetails
    },
  ],
})

export default router
