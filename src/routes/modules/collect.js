export default [
  {
    path: '/collect',
    name: '采集工具',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/collect/tool',
        name: '实时采集',
        component: () => import('@/views/collect/index.vue')
      }
    ]
  }
]
