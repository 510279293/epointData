<template>
  <div class="range-wrap" :class="{'r-collapse': toggle}" v-if="rowList.length">
    <el-form class="r-row" v-for="(row, index) in rowList" :key="index" :model="config" :rules="rules">
      <el-form-item class="r-item" v-for="(item, itemIndex) in row" :key="itemIndex" :label="item.label" :prop="item.model">
        <!-- 输入框表单 -->
        <el-input v-if="item.type === 'input'" v-model="config[item.model]" :placeholder="item.placeholder || ('请输入' + item.label)">
        </el-input>
        <!-- 选择器表单 -->
        <el-select v-if="item.type === 'select'" v-model="config[item.model]">
          <el-option v-for="(option, opIndex) in item.options" :key="opIndex" :label="option[item.optionsLabel || 'label']" :value="option[item.optionsValue || 'value']">
          </el-option>
        </el-select>
        <!-- 日期选择器- 类型1 -->
        <el-date-picker v-if="item.type === 'date'" v-model="config[item.model]" type="datetimerange" range-separator="至" :start-placeholder="item.startLabel" :end-placeholder="item.endLabel">
        </el-date-picker>
        <!-- 日期选择器- 类型2 -->
        <el-date-picker v-if="item.type === 'date2'" v-model="config[item.model]" style="width: 240px;" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="r-button" v-if="!index">
        <el-button type="primary" @click="submit">{{buttonLabel}}</el-button>
        <el-button type="primary" @click="reset" v-if="resetBtn">重置</el-button>
        <span class="r-toggle" v-if="rowList.length > 1" @click="toggleRow">
          {{toggle ? '展开' : '收起'}}
          <i class="el-icon-arrow-up r-toggle-icon" :class="{'arrow-down': toggle}"></i>
        </span>
      </el-form-item>
    </el-form>
    <div class="r-operate">
      <el-button v-if="operateBtn" type="primary" @click="operate">{{operateLabel}}</el-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.range-wrap {
  position: relative;
  height: 120px;
  border-bottom: 1px solid @line-color;
  transition: height 0.3s;
  overflow: hidden;
  .border-box;
  &.r-collapse {
    height: 60px;
  }
}
.r-row {
  display: flex;
  padding: 12px 0;
}
.r-item {
  display: flex;
  height: 36px;
  line-height: 36px;
  .el-input,
  .el-select {
    height: 36px;
  }
  .el-input {
    .widthPercent(280);
  }
  .el-select {
    .widthPercent(150);
  }
}
.r-toggle {
  display: inline-block;
  height: 36px;
  line-height: 36px;
  vertical-align: top;
  padding: 0 20px;
  cursor: pointer;
  transition: color 0.2s;
  .select-none;
  &:hover {
    color: @ope-color;
  }
  &:active {
    color: @ope-active;
  }
  .r-toggle-icon {
    color: @main-font;
    transition: 0.2s;
    &.arrow-down {
      transform: rotate(180deg);
    }
  }
}
</style>

<style lang="less" rel="stylesheet/less">
.r-row {
  .el-form-item__content {
    height: 36px;
  }
  .el-form-item {
    margin-bottom: 0px;
    margin-right: 20px;
  }
}
.r-item {
  .el-form-item__label {
    padding-left: 20px;
    padding-right: 10px;
  }
  .el-select .el-input.el-input--suffix {
    height: 36px;
    .el-input__icon {
      vertical-align: top;
    }
  }
}
.r-button .el-button {
  vertical-align: top;
  padding: 10px 25px;
  margin-left: 20px;
}
</style>
