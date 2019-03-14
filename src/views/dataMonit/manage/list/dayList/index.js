import contentRange from '@/components/content/contentRange/index.vue'
export default {
  data () {
    return {
      data: [{}],
      pagingConfig: {
        page: 1,
        size: 10,
        total: 100
      },
      rowList: [
        [
          {
            type: 'date',
            label: '抓取时间',
            model: 'commodityName',
            startLabel: '',
            endLabel: ''
          }
        ]
      ]
    }
  },
  props: {},
  components: {
    contentRange
  },
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    search () {},
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
    toDataMonitManage () {
      this.$router.push('/dataMonit/manage')
    }
  }
}
