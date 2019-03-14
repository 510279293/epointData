import channelApi from '@/services'
import contentRange from '@/components/content/contentRange/index.vue'
import contentTable from './components/contentTable.vue'
import diaSingleAdd from '@/components/dialogs/diaSingleAdd.vue'
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
            label: '商品名称',
            model: 'commodityName'
          }
        ]
      ],
      addConfig: {
        title: '新增商品',
        tip: '剩余可关注3个商品',
        placeholder: '请将您所要新增的商品链接复制到输入框内…',
        visible: false
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
    showAddItemDia () {
      this.addConfig.visible = true
      console.log(this.addConfig)
    }
  }
}
