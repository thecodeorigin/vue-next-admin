export default {
  name: 'auth-forgot-password',
  path: '/auth/forgot-password',
  component: () => import('./index.vue'),
  meta: {
    authNotRequired: true,
  },
}
