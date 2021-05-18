export default {
  name: 'forgot-password',
  path: '/forgot-password',
  component: () => import('./index.vue'),
  meta: {
    authNotRequired: true,
  },
}
