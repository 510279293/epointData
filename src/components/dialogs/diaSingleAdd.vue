<template>
  <div>
    <el-dialog :visible.sync="defaultData.visible" width="30%" class="dia-single-add" @close="close">
      <span slot="title">
        <div class="ck-title"><span>{{defaultData.title}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <p class="ck-tip" v-if="defaultData.tip">{{defaultData.tip}}</p>
          <div class="mart10">
            <el-input type="textarea" class="txtarea" clearable :placeholder="defaultData.placeholder" v-model="textarea" :autosize="{ minRows: 4, maxRows: 6}">
            </el-input>
          </div>
        </div>
        <div class="ck-foot">
          <el-button type="primary" size="medium" :disabled="!(textarea.trim().length>0)" @click="surepop(defaultData)">{{defaultData.btn}}</el-button>
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
        title: '店铺监控显示字段设置',
        tip: 'ghdfjgfdkg',
        visible: false,
        placeholder: '请输入店铺名称/旺旺号',
        btn: '关注',
        emitdata: ''
      },
      textarea: ''
    }
  },
  components: {},
  mounted () {
    console.log(this.config)
  },
  computed: {},
  watch: {
    'config.visible' () {
      console.log(this.config)
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
      this.$emit('surepop', this.textarea)
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
.dia-single-add {
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
      .mart10 {
        margin-top: 10px;
        margin-bottom: 57px;
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
