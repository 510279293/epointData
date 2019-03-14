<template>
  <div class="diaAddShop">
    <el-dialog :visible.sync="defaultData.visible" width="30%" class="dia-addShop" @close="close" style="min-width: 506px;">
      <span slot="title">
        <div class="ck-title"><span>{{defaultData.title}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <el-form :model="defaultData.formData" :rules="rules" label-width="130px">
            <el-form-item label="店铺名称/旺旺号" prop="shopName" class="item-shopName" v-if="defaultData.type!=='auth'">
              <el-input type="text" v-model="defaultData.formData.shopName" autocomplete="off" placeholder="请输入新增店铺名称/旺旺号"></el-input>
            </el-form-item>
            <p class="p-auth" v-if="defaultData.type==='auth'">授权 {{defaultData.formData.shopName}} 为</p>
            <el-form-item :label="defaultData.type!=='auth'?'店铺类型':''" prop="shopType" class="item-shopType">
              <el-radio v-for="item in defaultData.radioList" v-model="defaultData.formData.shopType" :label="item.label">{{item.name}}</el-radio>
              <!-- <el-radio v-model="defaultData.formData.shopType" label="2">自营店</el-radio> -->
            </el-form-item>
          </el-form>
        </div>
        <div class="ck-foot">
          <el-button type="info" size="medium" @click="close">取消</el-button>
          <el-button type="primary" size="medium" @click="sureAdd(defaultData)">确认</el-button>
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
        title: '',
        visible: false,
        type: 'add',
        formData: {
          shopName: '',
          shopType: '1'
        },
        radioList: [
          {
            label: '1',
            name: '授权店'
          },
          {
            label: '2',
            name: '自营店'
          }
        ]
      },
      rules: {
        shopName: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        shopType: [
          { required: true, message: '', trigger: 'blur' }
        ]
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
    sureAdd (item) {
      if (this.checkFormData(this.defaultData.formData)) {
        item.visible = false
        this.$emit('sureAdd', this.defaultData.formData)
      }
    },
    close () {
      this.$emit('close')
      this.defaultData.visible = false
    },
    checkFormData (formData) {
      let flag = true
      let obj = {
        shopName: '店铺名称/旺旺号不能为空',
        shopType: '店铺类型不能为空'
      }
      for (let key in formData) {
        if (formData[key].trim() === '') {
          this.$message({
            showClose: false,
            message: obj[key],
            type: 'warning'
          })
          flag = false
          return flag
        }
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.diaAddShop {
  min-width: 506px;
}
.dia-addShop {
  .el-dialog {
    min-width: 506px;
  }
  .el-dialog__header {
    border-bottom: 1px solid #e1e5ee;
  }
  .el-dialog__body {
    padding: 0;
  }
  padding: 0px 0px !important;
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
      .item-shopName {
        margin-top: 10px;
      }
      .item-shopType {
        margin-bottom: 100px;
      }
      .p-auth {
        box-sizing: border-box;
        padding: 20px;
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
