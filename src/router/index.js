import { createWebHistory, createRouter } from 'vue-router'
import ActivityList from '../components/ActivityList.vue'
import Content from '../components/Content.vue'
import NotFound from '../components/NotFound.vue'

const history = createWebHistory('/F2E_Filter/')
const routes = [
  { path: '/', component: ActivityList },
  { path: '/content/:_id', name: 'content', component: Content },
  { path: '/:path(.*)*', component: NotFound }
]

const router = createRouter({ history, routes })
export default router
