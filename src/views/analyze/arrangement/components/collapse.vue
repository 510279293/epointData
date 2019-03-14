<template>
  <div class="collapse-wrap">
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in collaData" :key="index">
        <template slot="title">
          <span class="title-m1">{{index + 1}}</span>
          <span class="title-m2">{{item.princeName}}省</span>
          <span class="title-m3">&#65509;{{item.totalMoney}}</span>
        </template>
        <div class="collapse-body">
          <ul>
            <li>销售量：{{item.saleNum}}</li>
            <li>预估销售额：{{item.presaleMoney}}</li>
            <li>销售占比：{{item.salePersent}}</li>
            <li>销售占比：{{item.salePersent}}</li>
            <li>商品数：{{item.productionNum}}</li>
            <li>销售商品数：{{item.saleProductionNum}}</li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
// import G2 from '@antv/g2'
// G2.Global.colors = ['#FB3363', '#7777F9', '#3CB774']

export default {
  props: {
    collaData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.collapse-wrap{
  font-size: 14px;
  color: #5A5C5E;
  max-height: 360px;
  overflow-y: auto;
  overflow-x: hidden;
  .title-m1, .title-m2, .title-m3{
    float: left;
  }
  .title-m1{
    width: 60px;
    margin-right: 30px;
    text-align: center;
  }
  .title-m2{
    width: 160px;
    margin-right: 30px;
  }
  .collapse-body{
    padding: 5px 25px 0;
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        width: 250px;
        height: 20px;
        line-height: 20px;
        margin-top: 15px;
      }
    }
  }
}
</style>

<style lang="less">
.collapse-wrap{
  .el-collapse-item .el-collapse-item__header{
    background: #F5F8FA;
  }
}
</style>
