export default {
  name: 'users',
  path: '/users',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
  options: {
    // hidden: true, // For sidebar
    label: 'Users list', // If left empty, it will take the title
    icon: {
      type: 'fa',
      class: 'fas fa-tachometer-alt',
    },
  },
}
