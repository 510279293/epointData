import channelApi from '@/services'
import contentNav from '@/components/content/contentNav/index.vue'
import lowPriceManage from './components/lowPriceManage.vue'
import stolenManage from './components/stolenManage.vue'
import dropDown from '@/components/form/dropDown.vue'
export default {
  data () {
    return {
      // 导航栏菜单
      tableNav: 0,
      navList: [
        {
          label: '低价管理',
          count: -1
        },
        {
          label: '盗图管理',
          count: -1
        }
      ],
      dropDownConfig: { icon: 'el-icon-setting', dropdownList: ['原图设置'] }
    }
  },
  props: {},
  components: {
    contentNav,
    lowPriceManage,
    stolenManage,
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
      this.tableNav = value
    },
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
    dropdownCommand (str) {}
  }
}
