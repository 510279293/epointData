import channelApi from '@/services'
import contentNav from '@/components/content/contentNav/index.vue'
import contentRange from '@/components/content/contentRange/index.vue'
import contentTable from './components/contentTable.vue'
import selectBand from '@/components/form/selectBand.vue'
// import diaCkbox from '@/components/dialogs/diaCkbox.vue'
import dropDown from '@/components/form/dropDown.vue'
export default {
  data () {
    return {
      // 导航栏菜单
      navList: [
        {
          label: '全部店铺',
          count: 34000
        },
        {
          label: '已授权',
          count: 26000
        },
        {
          label: '未授权',
          count: 2
        },
        {
          label: '已关店',
          count: 0
        },
        {
          label: '近7天新开店',
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
            label: '店铺名称/旺旺号',
            model: 'shopName',
            placeholder: '请输入店铺名称、关键词'
          }
        ],
        [
          {
            type: 'select',
            label: '店铺等级',
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
            label: '省市',
            model: 'province',
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
            model: 'citys',
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
      dropDownConfig: {
        icon: 'el-icon-setting',
        dropdownList: ['授权设置']
      }
    }
  },
  props: {},
  components: {
    contentNav,
    contentRange,
    contentTable,
    selectBand,
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
    dropdownCommand (str) {
      console.log(str)
      this.$router.push('/setting/storeSet')
    }
  }
}
