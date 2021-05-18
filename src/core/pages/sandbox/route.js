export default {
  name: 'sandbox',
  path: '/sandbox',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
  },
}
