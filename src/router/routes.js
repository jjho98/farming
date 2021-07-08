
const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    name: 'delivery',
    path: '/delivery',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'deliveryIndex', path: '', component: () => import('pages/DeliveryPage.vue') }
    ]
  },
  {
    name: 'direct',
    path: '/direct',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'directIndex', path: '', component: () => import('pages/DirectPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  }
]

export default routes
