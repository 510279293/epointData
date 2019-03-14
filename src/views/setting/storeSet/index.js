import contentNav from '@/components/content/contentNav/index.vue'
export default {
  data () {
    return {
      // 导航栏菜单
      navList: [
        {
          label: '授权设置'
        },
        {
          label: '对接设置'
        }
      ]
    }
  },
  props: {},
  components: {
    contentNav
  },
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    // nav 回调
    changeNav (value) {
      value
        ? this.$router.push('/setting/storeSet/dockSet')
        : this.$router.push('/setting/storeSet')
    }
  }
}
