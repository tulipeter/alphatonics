import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/AppLayout.vue'),
      children:[
        {
          path:'/',
          component: () => import('../views/HomeView.vue'),
         },
       {
        path:'home',
        component: () => import('../views/HomeView.vue'),
       },
       {
        path:'our-division',
        component: () => import('../views/OurDivision.vue'),
       },
       {
        path:'shop',
        component: () => import('../views/ShopView.vue'),
       },
       {
        path:'past-event',
        component: () => import('../views/PastEvent.vue'),
       },
       {
        path:'up-coming',
        component: () => import('../views/UpComing.vue'),
       }

      ]
    }
  ]
})

export default router
