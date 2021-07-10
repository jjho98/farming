
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
    component: () => import('layouts/DeliveryListLayout.vue'),
    children: [
      { name: 'deliveryList', path: ':category', component: () => import('pages/DeliveryList.vue') },
    ]
  },
  {
    name: 'direct',
    path: '/direct',
    component: () => import('layouts/DirectListLayout.vue'),
    children: [
      { name: 'directList', path: ':category', component: () => import('pages/DirectList.vue') },
    ]
  },
  {
    name: 'tab',
    path: '/tab',
    component: () => import('layouts/FooterLayout.vue'),
    children: [
      { name: 'addressSet', path: 'address', component: () => import('pages/AddressSet.vue')},
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
