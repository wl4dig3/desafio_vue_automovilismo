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
    component: () => import(/* webpackChunkName: "sobremi" */ '../views/Sobremi.vue'),
    children: [
        {
            path: 'comentarios',
            component: 'Comentarios',
            name:'comentarios',
           component: () => import(/* webpackChunkName: "comentarios" */ '../components/Comentarios.vue'),
          }
        ],
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
