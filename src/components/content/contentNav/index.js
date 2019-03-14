/**
 * @file contentNav
 * @description nav components for Table Structure Pages
 * @author author-Lyn [liyinyufeng@loonxi.com]
 * *
 * @param {{Array}} navList 导航列表数组
 * @param {{String in navList[Object]}} label 导航名称
 * @param {{Number in navList[Object]}} count 导航统计数量
 */

export default {
  data () {
    return {
      currentIndex: 0, // 默认显示
      currentWidth: 0, // bar宽度
      currentLeft: 0 // bar位置
    }
  },
  props: {
    navList: {
      type: Array,
      default: []
    }
  },
  components: {},
  mounted () {
    this.setNavBarPosition(0)
  },
  computed: {},
  watch: {},
  methods: {
    // 点击菜单方法
    handleNavItems (index) {
      this.currentIndex = index
      this.$emit('changeNav', index)
      this.setNavBarPosition(index)
      // this.curIndex = index || -1
    },
    // 设置导航条位置
    setNavBarPosition (index) {
      let current = this.$refs['nav' + index][0]
      this.currentWidth = current.clientWidth || 0
      this.currentLeft = current.offsetLeft || 0
    },
    setIndex (index) {
      this.currentIndex = index
      this.setNavBarPosition(index)
    }
  }
}
