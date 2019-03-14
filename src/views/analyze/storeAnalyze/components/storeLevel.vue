<template>
  <div class="store-level">
    <div class="title">
      <h3>店铺等级销量分布</h3>
      <swtch-tab></swtch-tab>
    </div>
    <div id="store-level"></div>
  </div>
</template>
<script>
import SwtchTab from './swtchTab/swtchTab.vue'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      levelData: [{
        country: '巴西',
        population: 182033
      }, {
        country: '印尼',
        population: 234899
      }, {
        country: '美国',
        population: 29034
      }, {
        country: '印度',
        population: 104970
      }, {
        country: '中国',
        population: 131744
      }]
    }
  },
  props: {
  },
  components: {
    SwtchTab
  },
  mounted () {
    setTimeout(() => {
      this.initStroeLevel(this.levelData)
    }, 0)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    initStroeLevel (data) {
      var chart = new this.G2.Chart({
        container: 'store-level',
        forceFit: true,
        height: 400,
        padding: [40, 60]
      })
      chart.source(data)
      chart.axis('country', {
        label: {
          offset: 12
        }
      })
      // chart.tooltip({
      //   itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{population}123123</li>'
      // })
      chart.tooltip(true).coord().transpose()
      chart.interval().position('country*population').color('country', ['#7777F9'])
      chart.legend(false).render()
    }
  }
}
</script>
<style lang="less" scoped>
.store-level {
  background: #fff;
  .title {
    font-size: 20px;
    color: #5a5c5e;
    font-weight: 500;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
    h3 {
      font-weight: 500;
    }
  }
}
</style>
