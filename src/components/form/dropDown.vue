<template>
  <div class="dropDown">
    <!-- 下拉菜单 -->
    <el-dropdown @command="handleCommand" placement="top">
      <span class="span-add">
        <i :class="defaultData.icon"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in defaultData.dropdownList" :command="item">{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

export default {
  data () {
    return {
      defaultData: {
        icon: 'el-icon-plus',
        dropdownList: ['新增监控']
      }
    }
  },
  props: {
    config: {
      type: Object
    }
  },
  mounted () {
    Object.assign(this.defaultData, this.config)
  },
  computed: {},
  watch: {},
  methods: {
    handleCommand (str) {
      this.$emit('dropdownCommand', str)
    }
  }
}
</script>

<style lang='less' scoped>
@import '~assets/styles/variables';
.dropDown {
  display: inline-block;
  .span-add {
    border: 1px solid #cfd8e2;
    box-sizing: border-box;
    padding: 4px;
    font-size: 20px;
    color: #999;
    border-radius: 4px;
  }
}
</style>
