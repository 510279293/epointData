import contentNav from '@/components/content/contentNav/index.vue'
import monitResult from './components/monitResult.vue'
import planList from './components/planList.vue'
export default {
  data () {
    return {
      // 导航栏菜单
      tableNav: 0,
      navList: [
        {
          label: '监控结果',
          count: -1
        },
        {
          label: '计划列表',
          count: -1
        }
      ],
      isShow: true
    }
  },
  props: {},
  components: {
    contentNav,
    monitResult,
    planList
  },
  mounted () {
    if (this.$route.name !== '监控管理') {
      this.isShow = false
    }
  },
  computed: {},
  watch: {
    $route (newVal, oldVal) {
      console.log(newVal + '999')
      if (newVal.name === '监控管理') {
        this.isShow = true
      }
    }
  },
  methods: {
    // nav 回调
    changeNav (value) {
      this.tableNav = value
      this.defNavIndex = -1
    },
    toDayList () {
      this.isShow = false
      this.$router.push('/dataMonit/manage/dayList')
    },
    planSeeResult (str) {
      this.changeNav(0)
      this.$refs.mNav.setIndex(0)
    }
  }
}
