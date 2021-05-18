export default {
  name: '500',
  path: '/error',
  component: () => import('./index.vue'),
  meta: {
    layout: 'error',
    auth: false,
  },
}
