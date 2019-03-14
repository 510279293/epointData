/**
 * @file epointPagination
 * @description pagination components for Table Structure Pages
 * @author author-Lyn [liyinyufeng@loonxi.com]
 *
 * @param {{Number}} currentPage 当前页数
 * @param {{Number}} pageSize 当前每页数量
 * @param {{Number}} total 总数量
 *
 * @return {{}} emit.size-change 每页显示数量回调
 * @return {{}} emit.current-change 页码切换回调
 */

export default {
  name: 'EpointPagination',
  data () {
    return {}
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  components: {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    // 显示数量切换
    handleSizeChange (val) {
      this.$emit('size-change', val)
    },
    // 页码切换
    handleCurrentChange (val) {
      this.$emit('current-change', val)
    }
  }
}
