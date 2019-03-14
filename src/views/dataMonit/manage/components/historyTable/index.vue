<template>
  <el-table :data="data" :show-header="false">
    <el-table-column fixed class="table-index" v-if="true" type="index" width="60" label="序号">
      <template slot-scope="scope">
        <span class="table-index"></span>
      </template>
    </el-table-column>
    <el-table-column min-width="150" label="" prop="content">
      <template slot-scope="scope">
        <p class="colorBlue">计划名称A</p>
      </template>
    </el-table-column>
    <el-table-column min-width="100" label="" prop="channelName">
      <template slot-scope="scope">
        <p>每周一 12:30</p>
      </template>
    </el-table-column>
    <el-table-column min-width="136" label="" prop="totalSalesQty">
      <template slot-scope="scope">
        <p>2018/08/09 12:30:30</p>
      </template>
    </el-table-column>
    <el-table-column min-width="136" label="" prop="salesQty">
      <template slot-scope="scope">
        <p @click="toGoodsList" class="colorBlue">123456</p>
      </template>
    </el-table-column>
    <el-table-column min-width="140" label="" prop="daySalesQty">
      <template slot-scope="scope">
        <p @click="toShopList" class="colorBlue">123</p>
      </template>
    </el-table-column>
    <el-table-column min-width="150" label="" prop="daySalesQty">
      <template slot-scope="scope">
        <p @click="toProtection" class="colorBlue">123</p>
      </template>
    </el-table-column>
    <el-table-column min-width="136" label="" prop="daySalesQty">
      <template slot-scope="scope">
        <p @click="toProtection" class="colorBlue">去设置</p>
      </template>
    </el-table-column>
    <el-table-column min-width="110" label="" prop="daySalesQty">
      <template slot-scope="scope">
        <p>已完成</p>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import mock from '@/mock/mock-for-table1'
export default {
  data () {
    return {
      data: mock
    }
  },
  props: {},
  components: {},
  mounted () { },
  computed: {},
  watch: {},
  methods: {
    toShopList () {
      // console.log(this.$parent.isShow = false)
      this.$router.push('/dataMonit/manage/shopList')
    },
    toGoodsList () {
      // this.$parent.isShow = false
      this.$router.push('/dataMonit/manage/goodsList')
    },
    toProtection () {
      this.$router.push('/dataMonit/protection')
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
</style>
