import channelApi from '@/services'
import contentNav from '@/components/content/contentNav/index.vue'
import selectBand from '@/components/form/selectBand.vue'
import contentRange from '@/components/content/contentRange/index.vue'
import contentTable from './components/contentTable.vue'
import diaSingleAdd from '@/components/dialogs/diaSingleAdd.vue'
// import diaCkbox from '@/components/dialogs/diaCkbox.vue'
import dropDown from '@/components/form/dropDown.vue'
export default {
  data () {
    return {
      // 导航栏菜单
      navList: [
        {
          label: '全部商品',
          count: 34000
        },
        {
          label: '已下架',
          count: 26000
        },
        {
          label: '近7天新上架',
          count: 2
        },
        {
          label: '已取消监控',
          count: 0
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
            model: 'shopName',
            placeholder: '请输入店铺名称、关键词'
          },
          {
            type: 'select',
            label: '是否有活动',
            model: 'activity',
            options: [
              {
                label: '全部',
                value: 0
              },
              {
                label: '有',
                value: 1
              },
              {
                label: '无',
                value: 2
              }
            ]
          }
        ]
      ],
      addConfig: {
        title: '新增监控商品',
        tip: '每次操作只能新增一件商品哦',
        placeholder: '请将您所要新增的商品链接复制到输入框内…',
        btn: '确定',
        visible: false
      },
      dropDownConfig: {}
    }
  },
  props: {},
  components: {
    contentNav,
    contentRange,
    contentTable,
    selectBand,
    diaSingleAdd,
    // diaCkbox,
    dropDown
  },
  mounted () {
    this.getChannelList()
  },
  computed: {},
  watch: {},
  methods: {
    // 获取渠道平台
    getChannelList () {
      channelApi.getChannelList().then(res => {
        if (!res.code) {
          this.rowList[0][0].options = res.data
        }
      })
    },
    // nav 回调
    changeNav (value) {
      console.log(value, 'fromNavCallBack')
    },
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
    sureAdd (textarea) {
      console.log(textarea)
      this.addConfig.visible = false
    },
    dropdownCommand (str) {
      this.addConfig.visible = true
    }
  }
}
