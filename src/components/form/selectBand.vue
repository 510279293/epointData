<template>
  <div :class="['selectBand', {'selected': isVisible}]">
    <!-- 下拉菜单 -->
    <!-- <el-dropdown class="selectDay" @command="handleCommand" @visible-change="visibleChange">
      <span class="el-dropdown-link">{{curidx}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="item" :class="{active: curidx === item}" v-for="(item, index) in itemList" :key="index">{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <el-select v-model="curidx" placeholder="请选择">
      <el-option v-for="item in itemList" :key="item.id" :label="item.name" :value="item.id">
      </el-option>
    </el-select>
  </div>
</template>

<script>

export default {
  data () {
    return {
      curidx: '品牌1',
      isVisible: false,
      itemList: [
        {
          id: '1',
          name: '品牌1'
        },
        {
          id: '2',
          name: '品牌2'
        },
        {
          id: '3',
          name: '品牌3'
        },
        {
          id: '4',
          name: '品牌4'
        },
        {
          id: '5',
          name: '品牌5'
        }
      ]
    }
  },
  methods: {
    // handleCommand (command) {
    //   this.$emit('child-msg', command)
    //   this.curidx = command
    // },
    // visibleChange (ev) {
    //   this.isVisible = ev
    // }
  },
  computed: {

  }
}
</script>

<style lang='less'>
@import '~assets/styles/variables';
.selectBand {
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  color: #516273;
  .widthPercent(120);
  .el-icon-arrow-down {
    transition: all 0.3s;
  }
  &.selected .el-icon-arrow-down {
    transform: rotate(-180deg);
  }
  .el-dropdown-link {
    color: #5858f1;
  }
}
</style>
