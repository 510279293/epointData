<template>
  <div class="price-compare">
    <div class="title">
      <h3>价格区间内销量、商品数对比</h3>
      <p class="label">
        <span class="sales"><i></i>销量</span>
        <span class="goods-num"><i></i>商品数</span>
      </p>
    </div>
    <div class="trend-box" id="compare">
    </div>
  </div>
</template>

<script>
import G2 from '@antv/g2'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
    }
  },
  props: {
    compareData: {
      type: Array
    }
  },
  components: {
  },
  mounted () {
    // console.log(this.data)
    setTimeout(() => {
      this.initCompare(this.compareData)
    }, 0)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    initCompare (data) {
      var chart = new G2.Chart({
        container: 'compare',
        forceFit: true,
        height: 400,
        padding: [50, 50]
      })
      chart.source(data, {
        saleNum: {
          min: 0,
          tickInterval: 50
        },
        goodsNum: {
          min: 0,
          tickInterval: 500
        }
      })
      chart.legend({
        custom: true,
        allowAllCanceled: true,
        items: [{
          value: 'saleNum',
          marker: {
            symbol: 'square',
            fill: '#3182bd',
            radius: 5
          }
        }, {
          value: 'goodsNum',
          marker: {
            symbol: 'hyphen',
            stroke: '#fdae6b',
            radius: 5,
            lineWidth: 3
          }
        }]
      })
      chart.axis('goodsNum', {
        grid: null,
        label: {
          textStyle: {
            fill: '#5A5C5E'
          }
        }
      })
      chart.tooltip({
        showTitle: true,
        title: 'prange',
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span><span style="margin-left:0px;">{value}</span></li>'
      })
      chart.interval().position('prange*saleNum').color('#7777F9')
      chart.line().position('prange*goodsNum').color('#5AC489').size(3).shape('smooth')
      chart.point().position('prange*goodsNum').color('#5AC489').size(3).shape('circle')
      chart.legend(false).render()
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
.price-compare {
  background: #fff;
  box-sizing: border-box;
  padding: 20px 15px;
  .title {
    font-size: 20px;
    color: #5a5c5e;
    font-weight: 500;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    h3 {
      font-weight: 500;
    }
    .label {
      color: #9798ab;
      font-size: 12px;
      display: flex;
      span {
        margin-left: 30px;
      }
      .sales {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          margin-right: 10px;
          width: 10px;
          height: 10px;
          background: #7777f9;
        }
      }
      .goods-num {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          margin-right: 10px;
          width: 30px;
          height: 2px;
          background: #5ac489;
          position: relative;
        }
        i:before {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(90, 196, 137, 1);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 50%;
          left: 12px;
          top: -3px;
        }
      }
    }
  }
}
</style>
