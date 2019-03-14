import Sales from '../../components/antv/sales.vue'
import MarketTrend from './components/marketTrend.vue'
import TopModule from './components/topModule.vue'
import wholeNet from './components/wholeNet.vue'
import platform from './components/platform.vue'
import brandCompare from './components/brandCompare.vue'
import Mock from './mock'

export default {
  data () {
    return {
      dataMock: Mock
    }
  },
  props: {
  },
  components: {
    Sales,
    MarketTrend,
    TopModule,
    wholeNet,
    brandCompare,
    platform
  },
  mounted () {
    console.log(Mock, 'Mock')
  },
  computed: {
  },
  watch: {
  },
  methods: {
  }
}
