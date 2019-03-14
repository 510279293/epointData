<template>
  <div class="shopList">
    <content-nav :navList="navList" @changeNav="changeNav">
      <template slot="warpR">
        <div class="warpR">
          <el-button class="warp-btn" size="medium" type="info" @click="diaMonitPlanShow">计划设置查询</el-button>
          <dropDown :config="dropDownConfig" @dropdownCommand="dropdownCommand"></dropDown>
        </div>
      </template>
    </content-nav>
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <div class="content-table">
      <epoint-table :data="data" :showIndex="true" :showItem="true" :config="ckBoxConfig" @sure="sureCkBox" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column min-width="150" label="店铺名称" prop="content">
          <template slot-scope="scope">
            <p class="colorBlue"><span class="colorBlue">超级无敌宇宙狂拽酷炫吊… </span>
              <el-tag @click.native="showDiaAddShop" class="cur-poster" :type="scope.row.auth_flag?'success':'info'" size="mini" @click="showAuthDia(scope.row)">{{scope.row.auth_flag?'取消授权':'点击授权'}}</el-tag>
            </p>
          </template>
        </el-table-column>
        <el-table-column min-width="100" label="平台" prop="channelName">
          <template slot-scope="scope">
            <p>淘宝</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" sortable label="相关商品数" prop="totalSalesQty">
          <template slot-scope="scope">
            <p><span class="colorBlue">300</span></p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" sortable label="近30天销量" prop="salesQty">
          <template slot-scope="scope">
            <p class="colorBlue">1000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="140" sortable label="总销量" prop="daySalesQty">
          <template slot-scope="scope">
            <p class="colorBlue">2000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="140" sortable label="总销售额" prop="daySalesQty">
          <template slot-scope="scope">
            <p class="colorBlue">2000</p>
          </template>
        </el-table-column>
        <el-table-column min-width="140" label="旺旺号" prop="daySalesQty">
          <template slot-scope="scope">
            <p class="colorBlue">妍妍</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" sortable label="店铺等级" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="所在省市" prop="daySalesQty">
          <template slot-scope="scope">
            <p>去设置</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="30天售后率" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="30天纠纷率" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="150" label="30天售后速度" prop="daySalesQty">
          <template slot-scope="scope">
            <p>123</p>
          </template>
        </el-table-column>
        <el-table-column min-width="136" label="店铺评分" prop="daySalesQty">
          <template slot-scope="scope">
            <p>100</p>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
      <!-- <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox> -->
      <diaMonitPlan :config="monitPlanConfig" @sure="sureMonitPlan"></diaMonitPlan>
      <diaAddShop :config="addConfig" @sureAdd="sureAdd" @close="addDialogClose"></diaAddShop>
    </div>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.shopList {
  .content-table {
    padding: 20px;
  }
  .colorBlue {
    color: #5858f1;
  }
  .cur-poster {
    cursor: pointer;
  }
  .warpR {
    position: absolute;
    right: 20px;
    top: 14px;
    .warp-btn {
      position: relative;
      margin-right: 20px;
      top: -2px;
    }
  }
}
</style>
