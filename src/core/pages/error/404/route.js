export default {
  name: '404',
  path: '/:pathMatch(.*)*',
  component: () => import('./index.vue'),
  meta: {
    layout: 'error',
    auth: false,
  },
  options: {
    hidden: true, // For sidebar
  },
}
