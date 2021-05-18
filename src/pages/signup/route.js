export default {
  name: 'signup',
  path: '/signup',
  component: () => import('./index.vue'),
  meta: {
    authNotRequired: true,
  },
}
