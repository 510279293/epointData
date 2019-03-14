/**
 * @file epointTable
 * @description table components for Table Structure Pages
 * @author author-Lyn [liyinyufeng@loonxi.com]
 *
 * @param {{Array}} data 当前表格数据
 * @param {{Boolean}} showIndex 是否显示序号
 * @param {{Boolean}} showItem 是否显示显示项配置按钮
 * @param {{Boolean}} showSelection 是否显示选择框
 * @param {{String}} selectionLabel 选择框选择类别文本
 * @param {{String}} selectionBtnLabel 选择框操作按钮文本
 * @param {{Number}} currentPage 当前页数
 * @param {{Number}} pageSize 当前每页数量
 *
 * @return {{}} emit.size-change 每页显示数量回调
 * @return {{}} emit.current-change 页码切换回调
 */

import { mapGetters, mapActions } from 'vuex'
import diaCkbox from '@/components/dialogs/diaCkbox.vue'
export default {
  name: 'EpointTable',
  data () {
    return {
      selection: []
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showItem: {
      type: Boolean,
      default: false
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    selectionLabel: {
      type: String,
      default: '商品'
    },
    selectionBtnLabel: {
      type: String,
      default: '按钮文字'
    },
    currentPage: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    config: {
      type: Object,
      default: () => {
        return {
          visible: false,
          tip: '0000'
        }
      }
    }
  },
  components: {
    diaCkbox
  },
  mounted () {},
  computed: {
    ...mapGetters(['tableHeight'])
  },
  watch: {},
  methods: {
    // 序号按页码计算
    indexMethod (index) {
      return (this.currentPage - 1) * this.pageSize + index + 1
    },
    // 选择变动
    handleSelectionChange (val) {
      this.selection = [...val]
    },
    // 选择按钮方法回调
    selectionCallback () {
      this.$emit('selectionCallback', this.selection)
    },
    showTableDialog () {
      this.config.visible = true
      // this.$emit('showTableDialog')
    },
    sureCkBox () {
      this.$emit('sureCkBox', this.config.emitdata.value)
    }
  }
}
