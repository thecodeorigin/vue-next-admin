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
  options: {
    // hidden: true, // For sidebar
    label: 'Users management', // If left empty, it will take the title
    icon: {
      type: 'fa',
      class: 'fas fa-users',
    },
  },
  children: [index, create, edit],
})
