import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Contact from '../views/Contact.vue'
import NewPost from '../views/NewPost.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/details/:des_id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
   // catchall 404
   {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
})

export default router