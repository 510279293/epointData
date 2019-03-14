export default [
  {
    path: '/peerMonit',
    name: '同行监控',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/peerMonit/brandGoods',
        name: '品牌-商品',
        component: () => import('@/views/peerMonit/brandGoods/index.vue')
      },
      {
        path: '/peerMonit/brandShop',
        name: '品牌-店铺',
        component: () => import('@/views/peerMonit/brandShop/index.vue')
      },
      {
        path: '/peerMonit/shopMonit',
        name: '店铺监控',
        component: () => import('@/views/peerMonit/shopMonit/index.vue')
      },
      {
        path: '/peerMonit/itemMonit',
        name: '单品监控',
        component: () => import('@/views/peerMonit/itemMonit/index.vue')
      }
    ]
  }
]
