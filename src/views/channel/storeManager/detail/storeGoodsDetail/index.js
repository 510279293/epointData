import contentTable from './components/contentTable.vue'
import qdDetailCard from '@/components/qdDetailCard/qdDetailCard.vue'
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  props: {},
  components: {
    contentTable,
    qdDetailCard
  },
  mounted () {
    setTimeout(() => {
      this.getTableHeight()
    }, 500)
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions(['getTableHeight'])
  }
}
