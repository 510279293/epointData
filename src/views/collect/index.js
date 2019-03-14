import PriceItem from '@/components/form/priceItem.vue'
import CollectTable from './components/collectTable.vue'
import diaAddkword from '@/components/dialogs/diaAddkword.vue'
import diaCkbox from '@/components/dialogs/diaCkbox.vue'
import collectApi from '@/services'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      timer: null,
      num: 0,
      isOpen: false,
      sequenceObj: {},
      plantList: {},
      loading: false,
      orderList: [
        {
          value: '0',
          text: '综合'
        },
        {
          value: '1',
          text: '销量'
        },
        {
          value: '2',
          text: '信用'
        },
        {
          value: '3',
          text: '人气'
        },
        {
          value: '4',
          text: '价格从高到低'
        },
        {
          value: '5',
          text: '价格从低到高'
        }
        // {
        //     value: 6,
        //     text: '新品'
        // }
      ],
      tableData: [],
      pageConfig: {
        page: 1,
        size: 10,
        total: 0,
        paging: true
      },
      resetParam: {},
      params: {
        channel: ['0'], // 采集平台
        keyWord: '', // 采集关键字
        needCount: 0, // 采集数量(0<4000)
        priceBegin: '', // 开始价格
        priceEnd: '', // 结束价格
        redPrice: '', // 标红价
        sortType: '1',
        brandName: '', // 品牌名称
        creater: '',
        merchantId: '',
        skuFlag: 0,
        realMonitorChannelList: [],
        priceArr: []
      },
      realParams: {
        channelIds: ['0'],
        loginId: '',
        needCount: '0',
        page: 1,
        paging: true,
        size: 10,
        synchronizeSales: -1,
        taskId: ''
      },
      keyConfig: {
        visible: false,
        title: '新建关键词',
        maxLen: 4
      },
      rules: {
        keyWord: [
          { required: true, message: '请输入搜索关键字', trigger: 'blur' }
        ],
        needCount: [
          { required: true, message: '请输入0-4000的采集量', trigger: 'blur' }
        ]
      },
      ckBoxConfig: {
        list: [
          { id: '1', name: '总销售额' },
          { id: '2', name: '近30天售出' },
          { id: '3', name: '品牌名称' },
          { id: '4', name: '所属类目' },
          { id: '5', name: '店铺名称' },
          { id: '6', name: '收藏商品数' },
          { id: '7', name: '旺旺号' },
          { id: '8', name: '发货地' },
          { id: '9', name: '付款人数' },
          { id: '10', name: '库存' }
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
    PriceItem,
    CollectTable,
    diaAddkword,
    diaCkbox
  },
  mounted () {
    this.resetParam = JSON.stringify(this.params)
    setTimeout(() => {
      this.getTableHeight()
    }, 500)
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions(['getTableHeight']),
    changeFormList (val) {
      this.sequenceObj[val.index] = val.value
      let startArr = []
      let endArr = []
      let obj = this.sequenceObj
      for (let key in obj) {
        startArr.push(+obj[key].min)
        endArr.push(+obj[key].max)
      }
      if (this.submitForm(startArr, endArr)) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
        this.$message.error('价格区间不能重叠！')
      }
    },
    submitForm (arr1, arr2) {
      var begin = arr1.sort((a, b) => a - b)
      var over = arr2.sort((a, b) => a - b)
      for (var k = 1; k < begin.length; k++) {
        if (begin[k] < over[k - 1]) {
          return false
        }
      }
      return true
    },
    resetParams () {
      this.params = JSON.parse(this.resetParam)
      if (this.$refs.priceItem) {
        this.$refs.priceItem.resetForm()
        this.sequenceObj = {}
      }
    },
    startSearch () {
      this.$confirm(
        '<p>预计消耗2000+条，剩余抓取量3000条</p><p>由于采集量较大，需要一定的采集时间，请耐心等待~</p>',
        '提示',
        {
          dangerouslyUseHTMLString: true,
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '取消'
        }
      )
        .then(() => {})
        .catch(action => {})
      let params = this.params
      params.realMonitorChannelList = []
      params.channel.forEach(item => {
        let obj = {
          channelId: item,
          id: '',
          merchantId: '',
          note: '',
          realMonitorTaskId: ''
        }
        params.realMonitorChannelList.push(obj)
      })
      if (this.sequenceObj[0]) {
        params.priceBegin = this.sequenceObj[0].min
        params.priceEnd = this.sequenceObj[0].max
        // console.log(this.sequenceObj[0])
      }
      delete params.brandName
      if (this.checkParams(params)) {
        this.loading = true
        this.realParams.page = 1
        collectApi.addRealMonitorTask(params).then(res => {
          if (!res.code) {
            this.realParams.channelIds = this.params.channel
            this.realParams.needCount = res.data.needCount
            this.realParams.taskId = res.data.taskId
            let _this = this
            _this.getRealMonitorDataList(this.realParams)
            clearInterval(this.timer)
            this.timer = setInterval(() => {
              _this.getRealMonitorDataList(this.realParams)
            }, 5000)
          }
        })
      }
    },
    checkParams (params) {
      let flag = true
      let obj = {
        channel: '请选择采集平台',
        keyWord: '采集关键字不能为空',
        needCount: '采集数量不能为空' // 采集数量(0<4000)
      }
      for (let key in obj) {
        if (key === 'channel' && params[key].length === 0) {
          this.$message.error(obj[key])
          return (flag = false)
        }
        if (params[key] + ''.trim() === '') {
          this.$message.error(obj[key])
          return (flag = false)
        }
      }
      return flag
    },
    getRealMonitorDataList (params) {
      let relparams = JSON.parse(
        JSON.stringify(Object.assign(params, this.pageConfig))
      )
      delete relparams.total
      collectApi.getRealMonitorDataList(relparams).then(res => {
        if (!res.code) {
          this.tableData = res.data.page.records
          this.pageConfig.total = res.data.page.totalCount
          this.plantList.jd = res.data.jd
          this.plantList.taobao = res.data.taobao
          this.plantList.tmall = res.data.tmall
          if (res.data.page.records.length > 0) {
            this.loading = false
          }
        }
      })
    },
    handleSizeChange (pageConfig) {
      this.loading = true
      this.pageConfig = Object.assign(pageConfig, this.pageConfig)
    },
    handleCurrentChange (pageConfig) {
      this.loading = true
      this.pageConfig = Object.assign(pageConfig, this.pageConfig)
    },
    toggleOpen () {
      this.isOpen = !this.isOpen
      this.getTableHeight(!this.isOpen)
    },
    showAddKeyWordDialog () {
      this.keyConfig.visible = true
    },
    addKeyClose () {
      this.keyConfig.visible = false
    },
    sureAddKey (arr) {
      this.params.keyWord = arr.join(';')
    },
    showTableDialog () {
      this.ckBoxConfig.visible = true
    },
    sureCkBox (emitdata) {
      console.log(emitdata)
    },
    queryAllowance () {
      // 余量查询
      this.$alert(
        '<p>剩余采集量 5000 条</p><p>为避免影响您的工作，请及时联系客户经理充值</p><p>电话：0571-56581745，QQ：3001942768</p>',
        '提示',
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '确定',
          callback: action => {}
        }
      )
    }
  },
  beforeRouteLeave (to, from, next) {
    // 页面离开前触发
    this.$confirm(
      '退出系统后，将中断当前的采集工作，是否继续退出系统？',
      '提示',
      {
        dangerouslyUseHTMLString: true,
        distinguishCancelAndClose: true,
        confirmButtonText: '保存',
        cancelButtonText: '取消'
      }
    )
      .then(() => {
        next()
      })
      .catch(action => {})
    // next()
  }
}
