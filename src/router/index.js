import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/Landing'
import Search from '../views/Search'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: Search,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
