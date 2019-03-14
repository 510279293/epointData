<template>
  <div class="dayList">
    <content-range :rowList="rowList" @callBack="search">
      <template>
        <p class="day-tip">套餐最大采集量：3000条/天</p>
      </template>
    </content-range>
    <div class="content-wrap">
      <epoint-table :data="data" :showIndex="false" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column min-width="150" label="执行日期" prop="content">
          <template slot-scope="scope">
            <p>2018/4/25</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="采集数据总量" prop="content">
          <template slot-scope="scope">
            <p>3000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="全部采集计划数" prop="content">
          <template slot-scope="scope">
            <p @click="toDataMonitManage" style="color: #5858F1;">2</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="部分采集计划数" prop="content">
          <template slot-scope="scope">
            <p @click="toDataMonitManage" style="color: #5858F1;">3</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="未采集计划数" prop="content">
          <template slot-scope="scope">
            <p @click="toDataMonitManage" style="color: #5858F1;">300</p>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
    </div>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.dayList {
  position: relative;
  .content-wrap {
    box-sizing: border-box;
    padding: 20px;
  }
  .day-tip {
    position: absolute;
    right: 20px;
    top: 22px;
  }
}
</style>
