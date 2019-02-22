import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/Home.vue')
const ItemPage = () => import('../views/ItemPage.vue')
const Contact = () => import('../views/Contact.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
      {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
          title: 'Marketsheet'
        }
      },
      {
        name: 'Contact',
        path: '/contact',
        component: Contact,
        meta: {
          title: 'Contact'
        }
      },
      {
        name: 'Item',
        path: '/item*',
        component: ItemPage,
        props: route => ({
          id: route.query.id
        }),
        meta: {
          title: 'Contact'
        }
      }
    ]
  })
}
