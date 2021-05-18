import home from '@/pages/home/route.js'
import about from '@/pages/about/route.js'
import forgotPassword from '@/pages/forgot-password/route.js'
import signin from '@/pages/signin/route.js'
import signup from '@/pages/signup/route.js'
import sandbox from '@/core/pages/sandbox/route'
import error500 from '@/core/pages/error/500/route'
import error404 from '@/core/pages/error/404/route'
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@middleware/auth'

export const routes = [
  home,
  about,
  forgotPassword,
  signin,
  signup,
  sandbox,
  error500,
  error404,
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(auth)
