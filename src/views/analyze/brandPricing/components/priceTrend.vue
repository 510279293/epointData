<template>
  <div class="price-trend">
    <div class="title">
      <h3>市场价格趋势分布</h3>
      <p class="label">
        <span v-for="item in arr" v-bind:key="item.name" class="label-item">
          <i :style="{background:item.color}"></i><b>{{item.name}}元</b>
        </span>
      </p>
    </div>
    <div class="trend-box" id="trend"></div>
  </div>
</template>

<script>
import G2 from '@antv/g2'
import { setTimeout } from 'timers'
const DataSet = require('@antv/data-set')
const DataView = DataSet.DataView
export default {
  data () {
    return {
      arr: []
    }
  },
  props: {
    trendData: {
      type: Object
    }
  },
  components: {
  },
  mounted () {
    setTimeout(() => {
      this.arr = this.trendData.arr
      let opaColor = this.trendData.opaColor
      let gcolor = this.trendData.gcolor
      let data = this.trendData.data
      this.initTrend(data, opaColor, gcolor)
    }, 0)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    initTrend (data, opaColor, gcolor) {
      var dv = new DataView().source(data)
      dv.transform({
        type: 'percent',
        field: 'value',
        dimension: 'pitem',
        groupBy: ['pdate'],
        as: 'percent'
      })
      var chart = new G2.Chart({
        container: 'trend',
        forceFit: true,
        height: 400
      })
      chart.source(dv, {
        'percent': {
          formatter: function formatter (value) {
            value = value || 0
            value = value * 100
            return parseInt(value) + '%'
          },
          alias: 'percent(%)'
        }
      })
      chart.tooltip({
        crosshairs: {
          geom: 'line'
        },
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{percent}</li>'
      })
      chart.areaStack().position('pdate*percent').color('pitem', [...opaColor]).tooltip(false)
      chart.lineStack().position('pdate*percent').color('pitem', [...gcolor]).size(2).tooltip('pitem*percent', (pitem, percent) => {
        percent = percent * 100
        percent = percent.toFixed(1) + '%'
        return {
          pitem, percent
        }
      })
      chart.legend(false).render()
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
.price-trend {
  background: #fff;
  box-sizing: border-box;
  padding: 20px 15px;
  .title {
    font-size: 20px;
    color: #5a5c5e;
    font-weight: 500;
    margin-bottom: 50px;
    position: relative;
    h3 {
      font-weight: 500;
    }
    .label {
      display: flex;
      width: 428px;
      flex-wrap: wrap;
      position: absolute;
      right: 0;
      top: 0;
      .label-item {
        display: flex;
        align-items: center;
        margin-right: 15px;
        margin-top: 15px;
        b {
          font-weight: 300;
          color: #9798ab;
          font-size: 12px;
        }
        i {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 5px;
          box-shadow: 0px 2px 4px 0px rgba(204, 204, 204, 0.5);
        }
      }
    }
  }
}
</style>
