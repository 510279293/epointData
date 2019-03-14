import sideBar from './components/sideBar/sideBar.vue'
import topBar from './components/topBar/topBar.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      small: false // 是否是小屏幕
    }
  },
  props: {},
  components: {
    sideBar,
    topBar
  },
  beforeMount () {
    // 判断是否为登录状态，否则访问页面跳转至登录页。
    if (!window.localStorage.isLogin) {
      this.$router.push({
        path: '/login'
      })
    }
  },
  mounted () {
    this.windowResize()
  },
  computed: {
    ...mapGetters([
      'isHomePage'
    ])
  },
  watch: {
  },
  methods: {
    // 监控屏幕缩放改版侧边栏样式
    windowResize () {
      let _this = this
      window.onresize = () => {
        _this.small = document.body.clientWidth < 1400
      }
    }
  }
}
