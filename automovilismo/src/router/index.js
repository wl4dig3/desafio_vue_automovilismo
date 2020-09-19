import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portada',
    component: () => import(/* webpackChunkName: "portada" */ '../views/Portada.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')

  },

  {
    path: '/sobremi/:entrada',
    name: 'sobremi',
    alias: '/s',
    component: () => import(/* webpackChunkName: "sobremi" */ '../views/Sobremi.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
