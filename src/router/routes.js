import { Cookies } from 'quasar'

const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', redirect: {name: 'deliveryIndex'} },
      { name: 'deliveryIndex', path: 'delivery', component: () => import('pages/DeliveryIndex.vue') },
      { name: 'directIndex', path: 'direct', component: () => import('pages/DirectIndex.vue') },
    ]
  },
  {
    name: 'delivery',
    path: '/delivery',
    component: () => import('layouts/DeliveryListLayout.vue'),
    children: [
      { name: 'deliveryList', path: ':category', component: () => import('pages/DeliveryList.vue'), meta: {title: '배달'} },
    ]
  },
  {
    name: 'direct',
    path: '/direct',
    component: () => import('layouts/DirectListLayout.vue'),
    children: [
      { name: 'directList', path: ':category', component: () => import('pages/DirectList.vue'), meta: {title: '직거래'} },
    ]
  },
  {
    name: 'product',
    path: '/product',
    component: () => import('layouts/ProductLayout.vue'),
    children: [
      { name: 'productDetail', path: ':id', component: () => import('pages/ProductDetail.vue') },
    ]
  },
  {
    name: 'tab',
    path: '/tab',
    component: () => import('layouts/BackFooterLayout.vue'),
    children: [
      { name: 'addressSet', path: 'address', component: () => import('pages/AddressSet.vue'), meta: {title: '주소 설정'}},
      { name: 'my', path: 'my', component: () => import('pages/MyInfo.vue'), meta: {title: '내 정보'} },
      { name: 'cart', path: 'cart', component: () => import('pages/Cart.vue'), meta: {title: '장바구니'} },
    ]
  },
  {
    name: 'auth',
    path: '/auth',
    component: () => import('layouts/FullLayout.vue'),
    children: [
      { name: 'login', path: 'login', component: () => import('pages/Login.vue') },
      { name: 'join', path: 'join', component: () => import('pages/Join.vue') },
      { path: 'kakao/callback', component: () => import('pages/KakaoCallback.vue') },
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
