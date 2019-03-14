export default [
  {
    path: '/index',
    name: '首页',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/home',
        name: '工作台',
        component: () => import('@/views/home/index.vue'),
        meta: {
          router: 'home'
        }
      }
    ]
  }
]
