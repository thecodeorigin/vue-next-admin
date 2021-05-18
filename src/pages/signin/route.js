export default {
  name: 'signin',
  path: '/signin',
  component: () => import('./index.vue'),
  meta: {
    authNotRequired: true,
  },
}
