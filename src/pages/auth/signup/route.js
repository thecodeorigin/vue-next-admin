export default {
  name: 'auth-signup',
  path: '/auth/signup',
  component: () => import('./index.vue'),
  meta: {
    authNotRequired: true,
  },
}
