export default [
  {
    path: '/analysis',
    name: '数据分析',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/analysis/sales',
        name: '销售概况',
        component: () => import('@/views/analyze/saleView/index.vue')
      },
      {
        path: '/analysis/arrangement',
        name: '地区分布',
        component: () => import('@/views/analyze/arrangement/index.vue')
      },
      {
        path: '/analysis/brandPricing',
        name: '品牌定价',
        component: () => import('@/views/analyze/brandPricing/index.vue')
      },
      {
        path: '/analysis/storeAnalyze',
        name: '店铺分析',
        component: () => import('@/views/analyze/storeAnalyze/index.vue')
      },
      {
        path: '/analysis/rtProtection',
        name: '维权分析',
        component: () => import('@/views/analyze/rtProtection/index.vue')
      }
    ]
  }
]
