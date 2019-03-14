// import contentTable from './components/contentTable.vue'
import qdDetailCard from '@/components/qdDetailCard/qdDetailCard.vue'
import priceTrend from './components/priceTrend.vue'
import saleTrend from './components/saleTrend.vue'
import contentTable from './components/contentTable.vue'
// import LineChart from '@/components/antv/lineChart.vue'
// import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  props: {},
  components: {
    qdDetailCard,
    priceTrend,
    saleTrend,
    contentTable
  },
  mounted () {
    // setTimeout(() => {
    //   this.getTableHeight()
    // }, 500)
  },
  computed: {},
  watch: {},
  methods: {
    // ...mapActions(['getTableHeight'])
  }
}
