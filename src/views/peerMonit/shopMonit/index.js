import channelApi from '@/services'
import contentRange from '@/components/content/contentRange/index.vue'
import diaSingleAdd from '@/components/dialogs/diaSingleAdd.vue'
import contentTable from './components/contentTable.vue'
export default {
  data () {
    return {
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
            label: '店铺名称/旺旺号',
            model: 'commodityName',
            placeholder: '请输入店铺名称/旺旺号'
          }
        ]
      ],
      addConfig: {
        title: '新增店铺',
        tip: '剩余可关注3个店铺',
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
    contentRange,
    contentTable,
    diaSingleAdd
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
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
    showAddShopDia () {
      this.addConfig.visible = true
      console.log(this.addConfig)
    }
  }
}
