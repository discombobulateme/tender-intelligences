import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Events from '@/views/Events.vue'
import LocalPartners from '@/views/LocalPartners.vue'
import MediaKit from '@/views/MediaKit.vue'
import SelectedWorks from '@/views/SelectedWorks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { order: 0 },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { order: 1 },
  },
  {
    path: '/local-partners',
    name: 'Local Partners',
    component: LocalPartners,
    meta: { order: 2 },
  },
  {
    path: '/selected-works',
    name: 'Selected Works',
    component: SelectedWorks,
    meta: { order: 3 },
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: { order: 4 },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { order: 5 },
  },
  {
    path: '/media-kit',
    name: 'Media Kit',
    component: MediaKit,
    meta: { order: 6 },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  const toOrder = to.meta.order
  const fromOrder = from.meta.order
  if (!fromOrder) to.meta.transitionName = undefined
  const transition = toOrder > fromOrder ? 'slide-up' : 'slide-down'
  console.log('transition: ', transition)
  to.meta.transitionName = transition
})

export default router
