export default {
  name: 'auth-signin',
  path: '/auth/signin',
  component: () => import('./index.vue'),
  meta: {
    authNotRequired: true,
  },
}
