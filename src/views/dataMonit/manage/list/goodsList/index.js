import goodsListTable from './components/goodsListTable.vue'
import skuListTable from './components/skuListTable.vue'
import contentNav from '@/components/content/contentNav/index.vue'
import contentRange from '@/components/content/contentRange/index.vue'
import diaMonitPlan from '@/components/dialogs/diaMonitPlan.vue'
import mock from '@/mock/mock-for-table1'
export default {
  data () {
    return {
      tableNav: 0,
      navList: [
        {
          label: '商品列表',
          count: -1
        },
        {
          label: 'SKU规格列表',
          count: -1
        }
      ],
      rowList: [
        [
          {
            type: 'select',
            label: '平台',
            options: [],
            model: 'channel',
            optionsLabel: 'name',
            optionsValue: 'id'
          },
          {
            type: 'input',
            label: '商品名称',
            model: 'commodityName'
          }
        ],
        [
          {
            type: 'input',
            label: '店铺名称',
            model: 'shopName'
          },
          {
            type: 'select',
            label: '是否有活动',
            options: [],
            model: 'isActity',
            optionsLabel: 'name',
            optionsValue: 'id'
          },
          {
            type: 'select',
            label: '是否授权',
            options: [],
            model: 'isAuth',
            optionsLabel: 'name',
            optionsValue: 'id'
          }
        ]
      ],
      monitPlanConfig: {
        list: [
          { id: '1', name: '上海' },
          { id: '2', name: '北京' },
          { id: '3', name: '广州' },
          { id: '4', name: '深圳' }
        ],
        title: '店铺监控显示字段设置',
        tip: 'ghdfjgfdkg',
        visible: false,
        emitdata: {
          key: 'popd',
          value: ['2', '4']
        }
      }
    }
  },
  props: {},
  components: {
    contentNav,
    contentRange,
    diaMonitPlan,
    goodsListTable,
    skuListTable
  },
  mounted () {
    // this.getCommodityData()
    this.init()
  },
  computed: {},
  watch: {},
  methods: {
    // nav 回调
    changeNav (value) {
      console.log(value, 'fromNavCallBack')
      this.tableNav = value
    },
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
    // 初始化数据
    init () {
      // this.pagingConfig.page = 1
      // this.getCommodityData()
    },
    // // 显示数量切换
    // handleSizeChange (val) {
    //   this.pagingConfig.size = val
    //   this.getCommodityData()
    // },
    // // 页码切换
    // handleCurrentChange (val) {
    //   this.pagingConfig.page = val
    //   this.getCommodityData()
    // },
    handleCommand (command) {
      if (command === 'a') {
        // this.$router.push('/channel/commodity/statisticalDetail')
      }
      if (command === 'b') {
        // this.$router.push('/channel/commodity/skuDetail')
      }
    },
    diaMonitPlanShow () {
      console.log(this.monitPlanConfig)
      // this.ckBoxConfig.visible = true
      this.monitPlanConfig.visible = true
    },
    sureMonitPlan () {}
  }
}
