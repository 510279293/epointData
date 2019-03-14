import channelApi from '@/services'
import contentNav from '@/components/content/contentNav/index.vue'
import selectBand from '@/components/form/selectBand.vue'
import contentRange from '@/components/content/contentRange/index.vue'
import contentTable from './components/contentTable.vue'
export default {
  data () {
    return {
      // 导航栏菜单
      navList: [
        {
          label: '全部店铺',
          count: 34
        },
        {
          label: '已关店',
          count: 26
        },
        {
          label: '近7天新开店',
          count: 2
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
            label: '店铺名称/旺旺号',
            model: 'commodityName'
          }
        ],
        [
          {
            type: 'select',
            label: '店铺等级',
            model: 'shopName',
            options: [],
            optionsLabel: 'name',
            optionsValue: 'id'
          },
          {
            type: 'select',
            label: '省市',
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
          },
          {
            type: 'select',
            label: '',
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
      ]
    }
  },
  props: {},
  components: {
    contentNav,
    contentRange,
    contentTable,
    selectBand
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
    }
  }
}
