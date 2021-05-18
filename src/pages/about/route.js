export default {
  path: '/about',
  component: () => import('./index.vue'),
  meta: {
    auth: true,
    permissions: ['ALL'],
  },
  children: [
    {
      path: 'sub',
      component: () => import('./sub/index.vue'),
      meta: {
        auth: false,
        permissions: ['ALL'],
      },
    },
  ],
}
