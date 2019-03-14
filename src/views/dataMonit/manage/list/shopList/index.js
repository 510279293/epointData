import contentNav from '@/components/content/contentNav/index.vue'
import contentRange from '@/components/content/contentRange/index.vue'
import dropDown from '@/components/form/dropDown.vue'
import diaCkbox from '@/components/dialogs/diaCkbox.vue'
import diaMonitPlan from '@/components/dialogs/diaMonitPlan.vue'
import diaAddShop from '@/components/dialogs/diaAddShop.vue'
import mock from '@/mock/mock-for-table1'
export default {
  data () {
    return {
      // 表格数据
      data: [],
      // 分页数据
      pagingConfig: {
        page: 1,
        size: 10,
        total: 100
      },
      navList: [
        {
          label: '全部店铺',
          count: 30
        },
        {
          label: '已授权',
          count: 20
        },
        {
          label: '未授权',
          count: 10
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
            label: '店铺名称',
            model: 'commodityName'
          }
        ]
      ],
      ckBoxConfig: {
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
      },
      dropDownConfig: {
        icon: 'el-icon-setting',
        dropdownList: ['授权设置']
      },
      monitPlanConfig: {
        list: [
          { id: '1', name: '总销售额' },
          { id: '2', name: '近30天销量' },
          { id: '3', name: '店铺等级' },
          { id: '4', name: '店铺评分' },
          { id: '5', name: '所在省市' },
          { id: '6', name: '30天售后率' },
          { id: '7', name: '30天纠纷率' },
          { id: '8', name: '30天售后速度' }
        ],
        title: '店铺监控显示字段设置',
        tip: 'ghdfjgfdkg',
        visible: false,
        emitdata: {
          key: 'popd',
          value: ['2', '4']
        }
      },
      addConfig: {
        title: '新建店铺',
        visible: false,
        type: 'auth'
      }
    }
  },
  props: {},
  components: {
    contentNav,
    contentRange,
    dropDown,
    diaCkbox,
    diaMonitPlan,
    diaAddShop
  },
  mounted () {
    this.getCommodityData()
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
      this.pagingConfig.page = 1
      this.getCommodityData()
    },
    // 显示数量切换
    handleSizeChange (val) {
      this.pagingConfig.size = val
      this.getCommodityData()
    },
    // 页码切换
    handleCurrentChange (val) {
      this.pagingConfig.page = val
      this.getCommodityData()
    },
    // 获取商品管理列表
    getCommodityData () {
      this.data = mock
    },
    handleCommand (command) {
      if (command === 'a') {
        // this.$router.push('/channel/commodity/statisticalDetail')
      }
      if (command === 'b') {
        // this.$router.push('/channel/commodity/skuDetail')
      }
    },
    dropdownCommand (str) {},
    showTableDialog () {
      this.ckBoxConfig.visible = true
    },
    sureCkBox (emitdata) {
      console.log(emitdata)
    },
    showAuthDia () {},
    diaMonitPlanShow () {
      console.log(this.monitPlanConfig)
      // this.ckBoxConfig.visible = true
      this.monitPlanConfig.visible = true
    },
    sureMonitPlan () {},
    showDiaAddShop () {
      this.addConfig.visible = true
    },
    sureAdd (formdata) {
      console.log(formdata)
    },
    addDialogClose () {
      this.addConfig.visible = false
    }
  }
}
