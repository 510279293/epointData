<template>
  <div>
    <el-dialog :visible.sync="defaultData.visible" width="30%" class="diaAddEdit-style" @close="close">
      <span slot="title">
        <div class="ck-title"><span>{{defaultData.title}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <el-form :model="defaultData.emitdata" :rules="rules" label-width="100px">
            <el-form-item label="登录账号" prop="loginAccount">
              <el-input type="text" class="wid280"></el-input>
            </el-form-item>
            <el-form-item label="账号名称" prop="loginName">
              <el-input type="text" class="wid280"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="loginPass" v-if="defaultData.type=='add'">
              <el-input type="password" class="wid280"></el-input>
            </el-form-item>
            <el-form-item label="选择角色" prop="role">
              <el-select v-model="defaultData.emitdata.role" placeholder="请选择" class="wid280">
                <el-option v-for="item in defaultData.options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="重置密码" prop="newPass" v-if="defaultData.type=='edit'">
              <el-input type="password" class="wid280"></el-input>
            </el-form-item>
            <el-form-item label="再次输入密码" prop="confirmPass" v-if="defaultData.type=='edit'">
              <el-input type="password" class="wid280"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="ck-foot">
          <el-button type="info" size="medium" @click="close">取消</el-button>
          <el-button type="primary" size="medium" @click="surepop(defaultData)">确认</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultData: {
        title: '新增子账号',
        visible: false,
        type: 'add',
        emitdata: {
          loginAccount: '',
          loginName: '',
          loginPass: '',
          role: '',
          newPass: '',
          confirmPass: ''
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      },
      rules: {
        loginAccount: [
          { required: true, message: '请输入登录账号', trigger: 'blur' }
        ],
        loginName: [
          { required: true, message: '请输入账号名称', trigger: 'blur' }
        ],
        loginPass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ]
      }
    }
  },
  props: {
    config: {
      type: Object
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
        this.$emit('close')
        this.config.visible = false
      }
    }
  },
  methods: {
    surepop (item) {
      item.visible = false
      this.$emit('surepop', item.emitdata)
    },
    close () {
      this.$emit('close')
      this.defaultData.visible = false
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.diaAddEdit-style {
  .wid280 {
    width: 280px;
  }
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
  .el-checkbox__label {
    color: #5a5c5e !important;
  }
  .el-form-item {
    margin-bottom: 20px;
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
      margin: 10px 0px 142px 0px;
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
