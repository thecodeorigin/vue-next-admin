import { Route } from '@/core/models/Route'
import edit from './_id/route'
import index from './index/route'
import create from './create/route'

export default new Route({
  name: 'users-wrapper',
  path: '/users',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
  children: [index, create, edit],
})
