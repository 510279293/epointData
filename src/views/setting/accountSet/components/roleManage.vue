<template>
  <div class="roleManage">
    <el-card class="role-item-add" shadow="always">
      <div class="add-box" @click="showDiaRole">
        <p class="add-icon"><i class="el-icon-circle-plus-outline"></i></p>
        <p class="add-txt">新增角色</p>
      </div>
    </el-card>
    <el-card class="role-item" shadow="always">
      <div class="item-top">
        <h3 class="item-name">角色名称1</h3>
        <p class="item-time">创建时间: 2010/06/06 09:00</p>
      </div>
      <div class="item-opa">
        <span>编辑</span>
        <span>删除</span>
      </div>
    </el-card>
    <diaAddRole :config="roleConfig" @sure="sureRole"></diaAddRole>
  </div>
</template>

<script>
import diaAddRole from '@/components/dialogs/diaAddRole.vue'
export default {
  data () {
    return {
      roleConfig: {
        list: [
          { id: '1', name: '总销售额' },
          { id: '2', name: '近30天销量' },
          { id: '3', name: '品牌名称' },
          { id: '4', name: '商品类目' },
          { id: '5', name: '店铺名称' },
          { id: '6', name: '收藏商品数' },
          { id: '7', name: '旺旺号' },
          { id: '8', name: '所在省市' },
          { id: '9', name: '付款人数' },
          { id: '10', name: '库存' }
        ],
        title: '新增角色',
        tip: 'ghdfjgfdkg',
        visible: false,
        emitdata: {
          key: 'popd',
          value: ['2', '4']
        }
      }
    }
  },
  props: {
  },
  components: {
    diaAddRole
  },
  mounted () {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    showDiaRole () {
      this.roleConfig.visible = true
    },
    sureRole (data) {
      console.log(data)
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.roleManage {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .role-item-add {
    background: #fafafa;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px;
    .widthPercent(290);
    min-width: 290px;
    margin-right: 20px;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c1c5d4;
    p {
      text-align: center;
    }
    .add-icon {
      i {
        width: 36px;
        height: 36px;
        font-size: 36px;
      }
    }
    .add-txt {
      font-size: 14px;
      margin-top: 10px;
    }
  }
  .role-item {
    .widthPercent(290);
    min-width: 290px;
    height: 144px;
    display: inline-block;
    margin-right: 20px;
    position: relative;
    .item-top {
      box-sizing: border-box;
      padding: 20px;
      .item-name {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 16px;
      }
      .item-time {
        font-size: 14px;
        font-weight: 400;
        color: rgba(151, 152, 171, 1);
        margin-bottom: 5px;
      }
    }

    .item-opa {
      width: 100%;
      position: absolute;
      width: 100%;
      bottom: 0;
      background: #fafafa;
      border-top: 1px solid #e1e5ee;
      box-sizing: border-box;
      padding: 8px 0px;
      span {
        display: inline-block;
        width: 50%;
        text-align: center;
        box-sizing: border-box;
        padding: 5px;
        font-size: 14px;
        color: #8f97b0;
        border-left: 1px solid #e1e5ee;
      }
      span:nth-of-type(1) {
        border: none;
      }
    }
  }
}
</style>
<style lang="less">
.roleManage {
  .el-card__body {
    padding: 0;
  }
  .role-item-add {
    .el-card__body {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px dashed #e1e5ee;
    }
  }
}
</style>
