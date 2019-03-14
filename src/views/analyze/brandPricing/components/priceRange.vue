<template>
  <div class="price-range">
    <el-dialog :visible.sync="visible" @close="close">
      <template slot="title">
        <span>价格区间定义</span>
      </template>
      <div class="price-list-box">
        <div class="tip">最多设置<span class="num">10</span>个价格区间</div>
        <div class="price-warp">
          <div class="priceLi clearfix" v-for="(num, index) in 10" :key="index">
            <span class="interval-txt">区间{{index + 1}}</span>
            <PriceItem :index="num" class="blf" @comFormList="changeFormList"></PriceItem>
            <span class="unit">元</span>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submit" :disabled="isDisabled">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import PriceItem from '@/components/form/priceItem.vue'

export default {
  data () {
    return {
      visible: false,
      sequenceObj: {},
      isDisabled: false
    }
  },
  props: {
    rangeData: {
      type: Object
    }
  },
  components: {
    PriceItem
  },
  mounted () {
  },
  computed: {
  },
  watch: {
    'rangeData.visible' () {
      this.visible = this.rangeData.visible
    }
  },
  methods: {
    changeFormList (val) {
      this.sequenceObj[val.index] = val.value
      let startArr = []
      let endArr = []
      let obj = this.sequenceObj
      for (let key in obj) {
        startArr.push(+obj[key].min)
        endArr.push(+obj[key].max)
      }
      if (this.submitForm(startArr, endArr)) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
        this.$message.error('价格区间不能重叠！')
      }
    },
    submitForm (arr1, arr2) {
      var begin = arr1.sort((a, b) => a - b)
      var over = arr2.sort((a, b) => a - b)
      for (var k = 1; k < begin.length; k++) {
        if (begin[k] < over[k - 1]) {
          return false
        }
      }
      return true
    },
    submit () {
      this.close()
      this.$emit('prangeSubmit', this.sequenceObj)
    },
    close () {
      this.rangeData.visible = false
      this.$emit('closePrangeDialog')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~assets/styles/qkwyq';

.price-range {
  .price-warp {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .priceLi {
      width: 260px;
      .hg(36px);
      margin-top: 20px;
      .interval-txt {
        .blf;
        width: 50px;
        margin-right: 4px;
      }
      .unit {
        margin-left: 6px;
      }
    }
  }
}
</style>

<style lang="less">
.price-range {
  .el-dialog__header {
    border-bottom: 1px solid #e1e5ee;
  }
  .price-list-box {
    .tip {
      font-size: 14px;
      font-weight: 400;
      color: #5a5c5e;
      background: rgba(74, 189, 124, 0.1);
      border: 1px solid rgba(74, 189, 124, 0.2);
      box-sizing: border-box;
      padding: 10px;
      .num {
        color: #5ac489;
      }
    }
  }
}
</style>
