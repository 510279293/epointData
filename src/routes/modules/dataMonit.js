export default [
  {
    path: '/dataMonit',
    name: '数据监控',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/dataMonit/manage',
        name: '监控管理',
        component: () => import('@/views/dataMonit/manage/index.vue'),
        children: [
          {
            path: '/dataMonit/manage/shopList',
            name: '店铺列表',
            component: () =>
              import('@/views/dataMonit/manage/list/shopList/index.vue')
          },
          {
            path: '/dataMonit/manage/goodsList',
            name: '商品列表',
            component: () =>
              import('@/views/dataMonit/manage/list/goodsList/index.vue')
          },
          {
            path: '/dataMonit/manage/dayList',
            name: '日明细查询',
            component: () =>
              import('@/views/dataMonit/manage/list/dayList/index.vue')
          }
        ]
      },
      {
        path: '/dataMonit/protection',
        name: '维权管理',
        component: () => import('@/views/dataMonit/protection/index.vue')
      }
    ]
  }
]
