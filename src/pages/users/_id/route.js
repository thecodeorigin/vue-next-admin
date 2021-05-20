import { Route } from '@/core/models/Route'

export default new Route({
  name: 'users-id',
  path: '/users/:id',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
})
