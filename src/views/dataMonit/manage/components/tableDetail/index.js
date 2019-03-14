export default {
  data () {
    return {
      currentRow: null,
      currentPage1: 5
    }
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
      console.log(`当前页: ${val}`)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    editRow (scope) {
      this.$emit('tableDetailEdit', scope.$index)
    },
    delRow (index) {
      this.$emit('delRow', index)
    }
  }
}
