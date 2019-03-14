<template>
  <div>
    <el-dialog :visible.sync="defaultData.visible" width="30%" class="dia-ckbox-tyle" @close="close">
      <span slot="title">
        <div class="ck-title"><span>{{defaultData.title}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <p class="ck-tip" v-if="defaultData.tip">{{defaultData.tip}}</p>
          <p class="has-cked">已选择{{defaultData.emitdata.value.length}}个自定义字段</p>
          <div>
            <el-checkbox-group v-model="defaultData.emitdata.value">
              <el-checkbox v-for="city in defaultData.list" :label="city.id" :key="city.name">{{city.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="ck-foot">
          <el-button type="info" size="medium" @click="hidpop(defaultData)">取消</el-button>
          <el-button type="primary" size="medium" @click="surepop(defaultData)">确认</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object
    }
  },
  data () {
    return {
      defaultData: {
        list: [
          { id: '1', name: '上海' },
          { id: '2', name: '北京' },
          { id: '3', name: '广州' },
          { id: '4', name: '深圳' }
        ],
        title: '店铺监控显示字段设置',
        tip: 'ghdfjgfdkg',
        visible: false,
        emitdata: {
          key: 'popd',
          value: ['2', '4']
        }
      }
    }
  },
  components: {},
  mounted () { },
  computed: {},
  watch: {
    'config.visible' () {
      if (this.config.visible) {
        Object.assign(this.defaultData, this.config)
      } else {
        this.config.visible = false
      }
    }
  },
  methods: {
    hidpop (item) {
      item.visible = false
    },
    surepop (item) {
      item.visible = false
      this.$emit('sure', item.emitdata.value)
    },
    close () {
      this.$emit('close')
      this.config.visible = false
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.dia-ckbox-tyle {
  .el-dialog__header {
    border-bottom: 1px solid #e1e5ee;
  }
  .el-dialog__body {
    padding: 0;
  }
  padding: 0px 0px !important;
  .el-checkbox__label {
    color: #5a5c5e !important;
  }
  .ck-pop {
    .ck-title {
      padding: 14px 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(225, 229, 238, 1);
    }
    .ck-box {
      box-sizing: border-box;
      padding: 0px 20px;
      padding-top: 10px;
      color: #5a5c5e;
      .el-checkbox-group {
        display: flex;
        flex-wrap: wrap;
        .el-checkbox {
          width: 50%;
          margin-left: 0px;
          margin-bottom: 15px;
        }
      }
      .has-cked {
        padding: 20px 0px 15px 0px;
      }
      .ck-tip {
        background: rgba(74, 189, 124, 0.1);
        color: #5a5c5e;
        border: 1px solid rgba(74, 189, 124, 0.3);
        box-sizing: border-box;
        padding: 10px;
      }
    }
    .ck-foot {
      text-align: right;
      border-top: 1px solid rgba(225, 229, 238, 1);
      box-sizing: border-box;
      padding: 16px 20px;
    }
  }
}
</style>
