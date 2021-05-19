import edit from './_id/route'
import index from './index/route'
import create from './create/route'
export default {
  path: '/users',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
  children: [index, create, edit],
}
