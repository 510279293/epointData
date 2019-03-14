<template>
  <div class="content-wrap">
    <div v-if="isShow">
      <content-nav :navList="navList" @changeNav="changeNav" ref="mNav">
        <template slot="warpR" v-if="isShow">
          <div class="warpR">
            <el-button size="medium" type="info" @click="toDayList">日明细查询</el-button>
          </div>
        </template>
      </content-nav>
      <monitResult v-if="tableNav==0"></monitResult>
      <planList v-if="tableNav==1" @planSeeResult="planSeeResult"></planList>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.content-wrap {
  position: relative;
  .warpR {
    position: absolute;
    right: 20px;
    top: 10px;
  }
}
</style>
