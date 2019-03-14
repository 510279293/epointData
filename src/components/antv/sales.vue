<template>
  <epoint-card class="sales">
    <div class="box-card">
      <div class="elm-head">
        <span>{{ptlt}}</span>
      </div>
      <div class="elm-body">
        <dl class="chartModule" v-for="(item, key) in dataSource" :key="key" v-if="dataSource.length > 0">
          <dt v-if="key === 0">1000元</dt>
          <dt v-else>
            <el-progress :show-text="false" type="circle" :stroke-width="8" :percentage="25" :width="102" :color="ponitCol[key]"></el-progress>
            <div class="propertyNum">{{item.money}}<span style="font-size: 14px">元</span></div>
          </dt>
          <dd>
            <p class="p1"><i class="ponit" :style="{'background': ponitCol[key]}"></i><span>{{item.target}}</span></p>
            <p class="p2">
              <span>较上一个30天</span>
              <span :style="{color: item.isUp ? '#FF4E50' : '#44C789'}">
                <i class="iconfont" v-if="item.isUp">&#xe617;</i>
                <i class="iconfont" v-else>&#xe618;</i>
                33%
              </span>
            </p>
            <p class="p3" style="color: #9798AB" v-if="key !== 0">
              <span>占全网</span>
              <span style="color: #5A5C5E">30%</span></p>
          </dd>
        </dl>
      </div>
    </div>
  </epoint-card>
</template>

<script>
export default {
  props: {
    ptlt: {
      type: String,
      default: ''
    },
    dataSource: {
      type: Array,
      default: () => { }
    }
  },
  data () {
    return {
      ponitCol: ['#FB3363', '#7777F9', '#3CB774']
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import '~assets/styles/variables';
@import '~assets/styles/qkwyq';
.sales {
  width: calc(~'50% - 15px');
  height: 334px;
  .elm-head {
    color: @main-font;
    margin-bottom: 40px;
  }
  .elm-body {
    display: flex;
    justify-content: space-between;
    .chartModule {
      width: 140px;
      text-align: center;
      dt {
        .hg(110px);
        width: 110px;
        color: @main-font;
        font-size: 30px;
        margin: 0 auto 20px;
        position: relative;
        .propertyNum {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          transform: translate(-50%, -52%);
          font-size: 20px;
        }
      }
      dd {
        p {
          .hg(20px);
          &:not(:last-child) {
            margin-bottom: 4px;
          }
        }
        .p1 {
          font-size: 16px;
        }
        .p2,
        .p3 {
          font-size: 14px;
          color: @secondary-font;
          .iconfont {
            font-size: 16px;
          }
        }
        .ponit {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>

<style lang="less">
.sales {
  .box-card {
    height: 100%;
    padding: 20px;
  }
}
</style>
