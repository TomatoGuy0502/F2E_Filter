import { createWebHashHistory , createRouter } from 'vue-router'
import ActivityList from '../components/ActivityList.vue'
import Content from '../components/Content.vue'
import NotFound from '../components/NotFound.vue'

const history = createWebHashHistory()
const routes = [
  { path: '/', component: ActivityList },
  { path: '/content/:_id', name: 'content', component: Content },
  { path: '/:path(.*)*', component: NotFound }
]

const router = createRouter({ history, routes })
export default router
