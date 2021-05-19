export default {
  name: 'users-id',
  path: '/users/:id',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
  options: {
    // hidden: true, // For sidebar
    label: 'Edit user', // If left empty, it will take the title
    icon: {
      type: 'fa',
      class: 'fas fa-tachometer-alt',
    },
  },
}
