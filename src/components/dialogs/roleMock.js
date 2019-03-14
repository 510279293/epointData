export default [
  {
    id: '0',
    name: '渠道管控',
    check: ['01'],
    checkAll: false,
    children: [
      {
        id: '01',
        name: '店铺管理',
        check: ['011', '012'],
        checkAll: true,
        children: [
          {
            id: '011',
            name: '授权',
            checkAll: false,
            check: [],
            children: []
          },
          {
            id: '012',
            name: '授权店铺设置',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      },
      {
        id: '02',
        name: '商品管理',
        check: [],
        checkAll: false,
        children: [
          {
            id: '021',
            name: '取消监控',
            checkAll: false,
            check: [],
            children: []
          },
          {
            id: '022',
            name: '授权店铺设置',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      },
      {
        id: '03',
        name: '评价管理',
        check: [],
        checkAll: false,
        children: []
      }
    ]
  },
  {
    id: '1',
    name: '同行监控',
    check: [],
    checkAll: false,
    children: [
      {
        id: '11',
        name: '品牌-商品',
        check: [],
        checkAll: false,
        children: [
          {
            id: '111',
            name: '取消监控',
            checkAll: false,
            check: [],
            children: []
          },
          {
            id: '112',
            name: '新增监控',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      },
      {
        id: '12',
        name: '品牌-店铺',
        check: [],
        checkAll: false,
        children: []
      },
      {
        id: '13',
        name: '店铺监控',
        check: [],
        checkAll: false,
        children: [
          {
            id: '131',
            name: '关注',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      },
      {
        id: '14',
        name: '单品监控',
        check: [],
        checkAll: false,
        children: [
          {
            id: '141',
            name: '关注',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '采集工具',
    check: [],
    checkAll: false,
    children: [
      {
        id: '21',
        name: '实时采集',
        checkAll: false,
        check: [],
        children: []
      }
    ]
  },
  {
    id: '3',
    name: '数据监控',
    check: [],
    checkAll: false,
    children: [
      {
        id: '31',
        name: '监控计划',
        check: [],
        checkAll: false,
        children: [
          {
            id: '311',
            name: '新增',
            checkAll: false,
            check: [],
            children: []
          },
          {
            id: '312',
            name: '复制',
            checkAll: false,
            check: [],
            children: []
          },
          {
            id: '313',
            name: '删除',
            checkAll: false,
            check: [],
            children: []
          },
          {
            id: '314',
            name: '暂停',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      },
      {
        id: '32',
        name: '维权管理',
        check: [],
        checkAll: false,
        children: [
          {
            id: '321',
            name: '维权设置',
            checkAll: false,
            check: [],
            children: []
          },
          {
            id: '322',
            name: '导出',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      },
      {
        id: '33',
        name: '授权管理',
        check: [],
        checkAll: false,
        children: []
      },
      {
        id: '34',
        name: '资产维权',
        check: [],
        checkAll: false,
        children: []
      }
    ]
  },
  {
    id: '4',
    name: '数据分析',
    check: [],
    checkAll: false,
    children: [
      {
        id: '41',
        name: '销量概览',
        checkAll: false,
        check: [],
        children: []
      },
      {
        id: '42',
        name: '品牌定价',
        checkAll: false,
        check: [],
        children: []
      },
      {
        id: '43',
        name: '地区分析',
        checkAll: false,
        check: [],
        children: []
      },
      {
        id: '44',
        name: '店铺分析',
        checkAll: false,
        check: [],
        children: []
      },
      {
        id: '45',
        name: '维权分析',
        checkAll: false,
        check: [],
        children: []
      },
      {
        id: '46',
        name: '资产投资分析',
        checkAll: false,
        check: [],
        children: []
      }
    ]
  },
  {
    id: '5',
    name: '数据对比',
    check: [],
    checkAll: false,
    children: [
      {
        id: '51',
        name: '品牌对比',
        checkAll: false,
        check: [],
        children: []
      }
    ]
  },
  {
    id: '6',
    name: '设置',
    check: [],
    checkAll: false,
    children: [
      {
        id: '61',
        name: '店铺设置',
        check: [],
        checkAll: false,
        children: []
      },
      {
        id: '62',
        name: '账户管理',
        check: [],
        checkAll: false,
        children: []
      },
      {
        id: '63',
        name: '客户信息',
        checkAll: false,
        check: [],
        children: []
      },
      {
        id: '64',
        name: '授权设置',
        check: [],
        checkAll: false,
        children: [
          {
            id: '641',
            name: '新增',
            check: [],
            checkAll: false,
            children: []
          },
          {
            id: '642',
            name: '复制',
            check: [],
            checkAll: false,
            children: []
          }
        ]
      },
      {
        id: '65',
        name: '对接设置',
        check: [],
        checkAll: false,
        children: [
          {
            id: '651',
            name: '维权设置',
            check: [],
            checkAll: false,
            children: []
          }
        ]
      },
      {
        id: '66',
        name: '用户管理',
        check: [],
        checkAll: false,
        children: [
          {
            id: '661',
            name: '新增子账号',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      },
      {
        id: '67',
        name: '角色管理',
        check: [],
        checkAll: false,
        children: [
          {
            id: '671',
            name: '新增角色',
            checkAll: false,
            check: [],
            children: []
          }
        ]
      }
    ]
  }
]
