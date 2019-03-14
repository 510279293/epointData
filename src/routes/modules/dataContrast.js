export default [
  {
    path: '/dataContrast',
    name: '数据对比',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/dataContrast/brandCompare',
        name: '品牌对比',
        component: () => import('@/views/dataContrast/brandCompare/index.vue')
      }
    ]
  }
]
