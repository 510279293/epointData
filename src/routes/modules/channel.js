export default [
  {
    path: '/channel',
    name: '渠道管控',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/channel/commodity',
        name: '商品管理',
        component: () => import('@/views/channel/commodity/index.vue')
      },
      {
        path: '/channel/storeManager',
        name: '店铺管理',
        component: () => import('@/views/channel/storeManager/index.vue')
      },
      {
        path: '/channel/commodity/skuDetail',
        name: 'SKU详情',
        component: () =>
          import('@/views/channel/commodity/detail/skuDetail/index.vue')
      },
      {
        path: '/channel/commodity/statisticalDetail',
        name: '统计详情',
        component: () =>
          import('@/views/channel/commodity/detail/statisticalDetail/index.vue')
      },
      {
        path: '/channel/storeManager/storeGoodsDetail',
        name: '相关商品详情',
        component: () =>
          import('@/views/channel/storeManager/detail/storeGoodsDetail/index.vue')
      }
    ]
  }
]
