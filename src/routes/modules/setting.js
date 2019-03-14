export default [
  {
    path: '/setting',
    name: '设置',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/setting/storeSet',
        name: '店铺设置',
        component: () => import('@/views/setting/storeSet/index.vue'),
        children: [
          {
            path: '/setting/storeSet',
            name: '授权设置',
            component: () =>
              import('@/views/setting/storeSet/authSet/index.vue')
          },
          {
            path: '/setting/storeSet/dockSet',
            name: '对接设置',
            component: () =>
              import('@/views/setting/storeSet/dockSet/index.vue')
          }
        ]
      },
      {
        path: '/setting/accountSet',
        name: '账户设置',
        component: () => import('@/views/setting/accountSet/index.vue')
      },
      {
        path: '/setting/customerInfo',
        name: '客户信息',
        component: () => import('@/views/setting/customerInfo/index.vue')
      },
      {
        path: '/setting/brandPicture',
        name: '品牌图片',
        component: () => import('@/views/setting/brandPicture/index.vue')
      }
    ]
  }
]
