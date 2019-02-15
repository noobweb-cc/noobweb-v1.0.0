import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/system/Index.vue'),
      children: [
        {
          path: '/canbbIndex',
          name: 'canbbIndex',
          component: () => import('./views/isyours/canbb/index.vue')
        },
        {
          path: '/love',
          name: 'love',
          component: () => import('./views/system/love/Index.vue')
        }
      ]
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('./views/system/Start.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/system/404.vue')
    }
  ]
})
