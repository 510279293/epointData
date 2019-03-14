/**
 * @file contentRange
 * @description range components for Table Structure Pages
 * @author author-Lyn [liyinyufeng@loonxi.com]
 *
 * @param {{Array}} rowList 表单行数
 * @param {{String}} buttonLabel 提交按钮文本
 * @param {{Boolean}} resetBtn 是否开启重置按钮
 * @param {{Boolean}} operateBtn 是否开启操作按钮
 * @param {{String}} operateLabel 操作按钮文本
 * @param {{Boolean}} collapse 是否默认收起
 *
 * @param {{string}} item.type 表单类别 input: 输入框, select: 选择器, date: 日期选择器
 * @param {{String}} item.label 表单文本
 * @param {{String}} item.model 绑定值
 * @param {{Boolean}} item.rules 表单验证
 * @param {{String}} item.placeholder 表单占位文字
 * @param {{Boolean}} item.small 是否为小表单
 * @param {{Array}} item.options 选择器所需数组
 * @param {{String}} item.optionsLabel 选择器label
 * @param {{String}} item.optionsValue 选择器value
 *
 * @return {{}} emit.callBack 提交按钮回调
 * @return {{}} emit.operateCallBack 操作按钮回调
 */
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      config: {},
      rules: {},
      toggle: false
    }
  },
  props: {
    rowList: {
      type: Array,
      default: () => []
    },
    buttonLabel: {
      type: String,
      default: '查询'
    },
    resetBtn: {
      type: Boolean,
      default: false
    },
    operateBtn: {
      type: Boolean,
      default: false
    },
    operateLabel: {
      type: String,
      default: '下载'
    },
    collapse: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  mounted () {
    this.toggle = this.collapse
    setTimeout(() => {
      this.getTableHeight()
    }, 500)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    ...mapActions([
      'getTableHeight'
    ]),
    // 回调函数
    submit () {
      this.$emit('callBack', this.config)
    },
    // 操作回调
    operate () {
      this.$emit('operateCallBack')
    },
    // 收起展开
    toggleRow () {
      this.toggle = !this.toggle
      this.getTableHeight(this.toggle)
    }
  }
}
