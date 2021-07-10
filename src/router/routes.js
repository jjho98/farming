
const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: {name: 'deliveryIndex'} },
      { name: 'deliveryIndex', path: 'delivery', component: () => import('pages/DeliveryIndex.vue') },
      { name: 'directIndex', path: 'direct', component: () => import('pages/DirectIndex.vue') },
      
    ]
  },
  {
    name: 'delivery',
    path: '/delivery',
    component: () => import('layouts/ListLayout.vue'),
    children: [
      { name: 'deliveryList', path: ':category', component: () => import('pages/DeliveryList.vue') },
    ]
  },
  {
    name: 'direct',
    path: '/direct',
    component: () => import('layouts/ListLayout.vue'),
    children: [
      { name: 'directList', path: ':category', component: () => import('pages/DirectList.vue') },
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
