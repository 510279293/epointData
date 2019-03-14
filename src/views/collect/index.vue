<template>
  <div class="collect">
    <el-form :model="params" :rules="rules" class="bor-bottom">
      <div class="choose-platform">
        <span class="mar-r8"><i class="red">*</i>平台</span>
        <el-checkbox-group v-model="params.channel">
          <el-checkbox label="0" :disabled="params.channel.includes('2')">淘宝&天猫</el-checkbox>
          <el-checkbox label="2" :disabled="params.channel.includes('0')">天猫</el-checkbox>
          <el-checkbox label="3">京东</el-checkbox>
        </el-checkbox-group>
        <el-button class="allowance-btn" type="info" size="medium" @click="queryAllowance">余量查询</el-button>
      </div>
      <div class="dis-flex-wrap" :class="{'is-collapse': isOpen}">
        <div class="dis-flex">
          <el-form-item label="关键词" prop="keyWord">
            <el-input v-model="params.keyWord" placeholder="最多输入十个关键词" size="medium" class="wid280" @focus="showAddKeyWordDialog"></el-input>
          </el-form-item>
          <el-form-item label="采集数量" prop="needCount" class="mar-no">
            <el-popover placement="top-start" width="200" :offset="100" trigger="hover" content="指采集总数量，按平台、关键词进行均分。每个关键词在每个平台上最多采集4000条。">
              <i slot="reference" class="el-icon-question i-question"></i>
            </el-popover>
            <el-input-number v-model="params.needCount" placeholder="0" :min="0" :max="4000" :controls="false" size="medium" class="wid150"></el-input-number>
          </el-form-item>
          <span class="mar-l10">
            <el-button type="primary" size="medium" @click="startSearch">开始采集</el-button>
          </span>
          <span class="mar-l10">
            <el-button type="info" size="medium" @click="resetParams">重置</el-button>
          </span>
        </div>
        <div class="dis-flex">
          <el-form-item label="采集排序">
            <!-- <el-input placeholder="0" size="medium" class="wid150"></el-input> -->
            <el-select v-model="params.sortType" placeholder="请选择" class="wid150" value-key="value">
              <el-option v-for="item in orderList" :key="item.value" :label="item.text" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="采集价格">
            <PriceItem ref="priceItem" :index="num" class="blf" @comFormList="changeFormList"></PriceItem><span class="mar-l10">元</span>
          </el-form-item>
          <el-form-item label="品牌">
            <el-input v-model="params.brandName" placeholder="请输入品牌名称" size="medium" class="wid280"></el-input>
          </el-form-item>
          <el-form-item label="标红价">
            <el-input-number v-model="params.redPrice" placeholder="请输入标红价" :controls="false" size="medium" class="wid150"></el-input-number>
          </el-form-item>
        </div>
      </div>
      <span class="is-open" @click="toggleOpen"><span>{{isOpen?'收起':'展开'}}</span><i :class="[isOpen?'el-icon-arrow-up':'el-icon-arrow-down']"></i></span>
    </el-form>
    <div class="collect-body">
      <div class="seach-sumary">
        <p>
          搜索结果:
          <span>淘宝:{{this.plantList.taobao||0}}条</span>
          <span>天猫:{{this.plantList.tmall||0}}条</span>
          <span>京东:{{this.plantList.jd||0}}条</span>
        </p>
        <el-button type="info" size="medium">下载</el-button>
      </div>
      <div class="seach-table">
        <collect-table v-loading="loading" :tableData="tableData" :pageConfig="pageConfig" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" @showTableDialog="showTableDialog"></collect-table>
      </div>
    </div>
    <diaAddkword :config="keyConfig" @close="addKeyClose" @sureAddKey="sureAddKey"></diaAddkword>
    <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.collect {
  .content-wrap;
  .red {
    color: #fb3363;
  }
  .mar-r8 {
    margin-right: 8px;
  }
  .mar-l10 {
    margin-left: 10px;
  }
  .wid280 {
    .widthPercent(280);
    // width: 280px;
  }
  .wid150 {
    .widthPercent(150);
    // width: 150px;
  }
  .dis-inline {
    display: inline-block;
  }
  .dis-flex-wrap {
    height: 60px;
    transition: height 0.3s;
    overflow: hidden;
    &.is-collapse {
      height: 120px;
    }
  }
  .dis-flex {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0px 20px;
    height: 60px;
  }
  .bor-bottom {
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    .is-open {
      position: absolute;
      // right: 44px;
      right: 340px;
      top: 68px;
      color: #5a5c5e;
      font-size: 16px;
      cursor: pointer;
      i {
        margin-left: 6px;
      }
    }
  }
  background: #fff;
  .choose-platform {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    height: 60px;
    .allowance-btn {
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
  .collect-body {
    box-sizing: border-box;
    padding: 20px;
    .seach-sumary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #5a5c5e;
      span {
        margin-left: 10px;
      }
    }
  }
  .el-input-number--medium {
    line-height: 40px;
  }
  .el-form-item {
    display: flex;
    margin-right: 20px;
  }
  .mar-no {
    margin-right: 0px;
    .i-question {
      position: relative;
      left: -8px;
    }
  }
}
</style>
