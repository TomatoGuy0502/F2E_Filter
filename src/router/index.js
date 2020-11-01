import { createWebHistory, createRouter } from 'vue-router'
import ActivityList from '../components/ActivityList.vue'
import NotFound from '../components/NotFound.vue'

const history = createWebHistory()
const routes = [
  { path: '/', component: ActivityList },
  { path: '/:path(.*)*', component: NotFound }
]

const router = createRouter({ history, routes })
export default router
