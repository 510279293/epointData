import saleTrend from './components/saleTrend.vue'
import wholeNet from './components/wholeNet.vue'
import Mock from './mock'

export default {
  data () {
    return {
      dataMock: Mock,
      contactOption: '',
      curIndex: 0,
      dateSelect: [
        new Date().setDate(new Date().getDate() - 6),
        new Date().getTime()
      ],
      accountTeamList: [
        {
          name: 'lucy'
        },
        {
          name: 'haha'
        },
        {
          name: 'lili'
        }
      ],
      timeList: ['本周', '本月', '本年'],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近7天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近30天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 29)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  props: {},
  components: {
    saleTrend,
    wholeNet
  },
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    contactSelect () {},
    selectTime () {}
  }
}
