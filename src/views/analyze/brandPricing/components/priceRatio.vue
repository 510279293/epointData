<template>
  <div class="price-ratio">
      <div class="title">消费者选择价格区间占比</div>
    
      <div class="pie-box">
        <ringChart v-if="ratioData && ratioData.length > 0" :ringData="ratioData" style="width: 500px;height: 360px;"></ringChart>
        <div class="ratio-pie">
          <h3 class="pie-title">消费者选择的价格区间及其占比</h3>
          <div class="span-list" v-if="ratioData && ratioData.length > 0">
            <span v-for="item in ratioData" v-bind:key="item.name"><i :style="{background:item.color}"></i>{{item.name+'元'}}:<b :class="[item.value==0?'red':'']">{{item.value+'%'}}</b></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import ringChart from '../../../../components/antv/ringChart.vue'

export default {
  data () {
    return {
      arr: []
    }
  },
  props: {
    ratioData: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ringChart
  },
  mounted () {
    console.log(this.ratioData, 'ratioData-ratioData')
  },
  computed: {
  },
  watch: {
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
.price-ratio {
  background: #fff;
  box-sizing: border-box;
  padding: 20px 15px;
  .title {
    font-size: 20px;
    color: #5a5c5e;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .pie-box {
    display: flex;
    align-items: center;
    .ratio-pie {
      width: 50%;
      .pie-title {
        color: #666;
        font-size: 14px;
        margin-bottom: 20px;
      }
      .span-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
        }
        b {
          font-weight: 100;
          margin-left: 6px;
        }
        span {
          display: inline-block;
          width: 200px;
          font-size: 14px;
          margin-bottom: 15px;
        }
        .red {
          color: #fb3363;
        }
      }
    }
  }
}
</style>
