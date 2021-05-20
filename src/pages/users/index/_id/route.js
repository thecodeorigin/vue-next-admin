import { Route } from '@/core/models/Route'

export default new Route({
  name: 'abc-id',
  path: '/abc/:id',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
  options: {
    // hidden: true, // For sidebar
    label: 'Edit đas', // If left empty, it will take the title
    icon: {
      type: 'fa',
      class: 'fas fa-tachometer-alt',
    },
  },
})
