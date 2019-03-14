<template>
  <div class="store-distribution">
    <div class="title">
      <h3>平台分布</h3>
      <p class="label">
        <span v-for="item in arr" v-bind:key="item.name" class="label-item">
          <i :style="{background:item.color}"></i><b>{{item.name}}</b>
        </span>
      </p>
    </div>
    <div class="elm-body">
      <div class="lf-module">
        <p class="module-title">平台销售量占比</p>
        <RingChart :ringData="ringData" :innerRadius="'35%'"></RingChart>
      </div>
      <div class="rt-module">
        <p class="module-title">平台销售趋势</p>
        <Histogram :HistogramData="HistogramData"></Histogram>
      </div>
    </div>
  </div>
</template>

<script>
import RingChart from '../../../../components/antv/ringChart.vue'
import Histogram from '../../../../components/antv/histogram.vue'
export default {
  data () {
    return {
      arr: [
        {
          color: 'rgba(251,51,99,1)',
          name: '淘宝'
        },
        {
          color: 'rgba(119,119,249,1)',
          name: '天猫'
        },
        {
          color: 'rgba(60,183,116,1)',
          name: '京东'
        }
      ],
      ringData: [{
        name: '淘宝',
        value: 40,
        percent: 0.4
      }, {
        name: '天猫',
        value: 21,
        percent: 0.21
      }, {
        name: '聚美优品',
        value: 17,
        percent: 0.17
      }, {
        name: '京东',
        value: 13,
        percent: 0.13
      }, {
        name: '小屁股',
        value: 9,
        percent: 0.09
      }],
      HistogramData: [{
        name: '美的',
        month: '08/20',
        value: 18.9
      }, {
        name: '美的',
        month: '08/21',
        value: 28.8
      }, {
        name: '美的',
        month: '08/22',
        value: 39.3
      }, {
        name: '美的',
        month: '08/23',
        value: 81.4
      }, {
        name: '美的',
        month: '08/24',
        value: 47
      }, {
        name: '美的',
        month: '08/25',
        value: 20.3
      }, {
        name: '美的',
        month: '08/26',
        value: 24
      }, {
        name: '美的',
        month: '08/27',
        value: 35.6
      }, {
        name: '老板',
        month: '08/20',
        value: 18.9
      }, {
        name: '老板',
        month: '08/21',
        value: 28.8
      }, {
        name: '老板',
        month: '08/22',
        value: 39.3
      }, {
        name: '老板',
        month: '08/23',
        value: 81.4
      }, {
        name: '老板',
        month: '08/24',
        value: 47
      }, {
        name: '老板',
        month: '08/25',
        value: 20.3
      }, {
        name: '老板',
        month: '08/26',
        value: 24
      }, {
        name: '老板',
        month: '08/27',
        value: 35.6
      }, {
        name: '格力',
        month: '08/20',
        value: 12.4
      }, {
        name: '格力',
        month: '08/21',
        value: 23.2
      }, {
        name: '格力',
        month: '08/22',
        value: 34.5
      }, {
        name: '格力',
        month: '08/23',
        value: 99.7
      }, {
        name: '格力',
        month: '08/24',
        value: 52.6
      }, {
        name: '格力',
        month: '08/25',
        value: 35.5
      }, {
        name: '格力',
        month: '08/26',
        value: 37.4
      }, {
        name: '格力',
        month: '08/27',
        value: 42.4
      }]
    }
  },
  props: {
  },
  components: {
    RingChart,
    Histogram
  },
  mounted () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/qkwyq';
.store-distribution {
  background: #fff;
  .title {
    font-size: 20px;
    color: #5a5c5e;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
    h3 {
      font-weight: 500;
    }
    .label {
      display: flex;
      width: 428px;
      flex-wrap: wrap;
      .label-item {
        display: flex;
        align-items: center;
        margin-left: 50px;
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
  .elm-body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 20px 0;
    & > div {
      height: 400px;
    }
    .module-title {
      color: #5a5c5e;
      font-size: 16px;
      font-weight: 500;
      .hg(22px);
    }
    .lf-module {
      width: 420px;
    }
    .rt-module {
      width: 730px;
    }
  }
}
</style>
