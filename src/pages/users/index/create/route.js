import { Route } from '@/core/models/Route'

export default new Route({
  name: 'abc-create',
  path: '/abc/create',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
  options: {
    // hidden: true, // For sidebar
    label: 'dfdf user', // If left empty, it will take the title
    icon: {
      type: 'fa',
      class: 'fas fa-tachometer-alt',
    },
  },
})
