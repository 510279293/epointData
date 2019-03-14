import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      routeList: [] // 路由关联数组
    }
  },
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  mounted () {
    console.log(this.$route)
    this.routeList = this.$route.matched
  },
  computed: {
    ...mapGetters([
      'isHomePage',
      'indexRouter'
    ])
  },
  watch: {
    '$route' (newVal, oldVal) {
      this.routeList = newVal.matched
    }
  },
  methods: {
  }
}
