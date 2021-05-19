import dashboard from '@/pages/dashboard/route.js'
import users from '@/pages/users/route.js'
import authPages from '@/pages/auth/route.js'
import sandbox from '@/core/pages/sandbox/route'
import error500 from '@/core/pages/error/500/route'
import error404 from '@/core/pages/error/404/route'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@middleware/auth'

export const routes = [
  dashboard,
  users,
  authPages,
  // Core pages
  sandbox,
  error500,
  error404,
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(auth)
