<template>
  <div>
    <el-dialog :visible.sync="defaultData.visible" width="30%" class="dia-ckbox-tyle" @close="close">
      <span slot="title">
        <div class="ck-title"><span>{{defaultData.title}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <!-- <p class="ck-tip" v-if="defaultData.tip">{{defaultData.tip}}</p>
          <p class="has-cked">已选择{{defaultData.emitdata.value.length}}个自定义字段</p> -->
          <el-form ref="ruleForm" label-width="70px" class="demo-ruleForm">
            <el-form-item label="角色名称" prop="name">
              <el-input placeholder="请输入新增角色名称"></el-input>
            </el-form-item>
          </el-form>
          <div class="isCkAll">
            <span>权限设置</span><span>
              <el-checkbox v-model="acheckAll" @change="authCheckAll">全选</el-checkbox>
            </span>
          </div>
          <div class="role-list" v-for="item in rolemock">
            <div class="role-list-name">
              {{item.name}}:
            </div>
            <div class="list-r-warp">
              <div class="role-list-ckgroup" v-if="item.children&&item.children.length>0" v-for="citem in item.children">
                <el-checkbox-group v-model="item.check">
                  <el-checkbox :indeterminate="(citem.check.length>0&&citem.check.length<citem.children.length)" :label="citem.id" :key="citem.name" v-model="citem.checkAll" @change="handleCheckAllChange($event,citem)">{{citem.name}}</el-checkbox>
                  <!-- <el-checkbox-group v-model="citem.check" @change="handleCheckedCitiesChange($event,citem)">
                    <el-checkbox v-for="ccitem in citem.children" :label="ccitem.id" :key="ccitem.name">{{ccitem.name}}</el-checkbox>
                  </el-checkbox-group> -->
                </el-checkbox-group>
              </div>
              <div class="child-list" v-if="item.children&&item.children.length>0&&citem.checkAll&&citem.children.length>0" v-for="citem in item.children">
                <el-checkbox-group v-model="citem.check" @change="handleCheckedCitiesChange($event,citem)">
                  <el-checkbox v-for="ccitem in citem.children" :label="ccitem.id" :key="ccitem.name">{{ccitem.name}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
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
import rolemock from './roleMock.js'
export default {
  props: {
    config: {
      type: Object
    }
  },
  data () {
    return {
      acheckAll: false,
      checks: [],
      rolemock: rolemock,
      defaultData: {
        list: [
          { id: '1', name: '上海' },
          { id: '2', name: '北京' },
          { id: '3', name: '广州' },
          { id: '4', name: '深圳' }
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
  components: {},
  mounted () {
    console.log(rolemock)
  },
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
    },
    handleCheckAllChange (value, item) {
      item.checkAll = value
      // this.getChildrenIds(item, value)
    },
    handleCheckedCitiesChange (value, item) {
      // item.check = value
      // item.checkAll = item.check.length === item.children.length
    },
    getChildrenIds (item, flag) {
      if (item.children) {
        item.children.forEach(el => {
          flag ? item.check.push(el.id) : item.check = []
          this.getChildrenIds(el, flag)
        })
      }
    },
    authCheckAll (val) { // 权限全选
      this.rolemock.forEach(el => {
        el.checkAll = val
        this.getChildrenIds(el, val)
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.dia-ckbox-tyle {
  .el-dialog {
    min-width: 626px;
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
      .el-checkbox {
        width: 100%;
        margin-left: 0px;
        margin-bottom: 15px;
      }
      .el-checkbox-group {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding-left: 10px;
      }
      .isCkAll {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
      }
      .role-list {
        display: flex;
        // flex-wrap: wrap;
        border-top: 1px solid #e1e5ee;
        padding-top: 15px;
        .role-list-name {
          width: 70px;
        }
      }
      .list-r-warp {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        .role-list-ckgroup {
          width: 124px;
        }
        .child-list {
          width: 100%;
          background: #fafafa;
          margin-bottom: 10px;
          .el-checkbox {
            width: auto;
            padding: 6px 20px 6px 0px;
            margin: 0;
          }
        }
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
