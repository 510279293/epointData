<template>
  <div>
    <el-dialog :visible.sync="config.visible" width="30%" class="dia-addkword-tyle" @close="close">
      <span slot="title">
        <div class="ck-title"><span>{{defaultData.title}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <p class="p-key">关键词</p>
          <div class="has-border">
            <div class="tags">
              <el-tag v-for="tag in tags" :key="tag.name" closable type="info" size="small" class="tag" @close="delTag(tag)">
                {{tag}}
              </el-tag>
            </div>
            <el-input type="textarea" class="txtarea" :placeholder="placeholder" v-model="textarea" :autosize="{ minRows: 8, maxRows: 12}" @keyup.enter.native="generateKeyword">
            </el-input>
          </div>
        </div>
        <div class="ck-foot">
          <el-button type="info" size="medium" @click="close">取消</el-button>
          <el-button type="primary" size="medium" @click="sureAddKey">确认</el-button>
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
        visible: false,
        title: '新建关键词',
        maxLen: 10
      },
      textarea: '',
      tags: [],
      placeholder: '每输入一个关键词，按Enter键结束'
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
        this.config.visible = false
      }
    },
    'tags' () {
      this.tags.length > 0 ? this.placeholder = '可继续输入关键词' : this.placeholder = '每输入一个关键词，按Enter键结束'
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.config.visible = false
    },
    sureAddKey () {
      this.config.visible = false
      this.$emit('sureAddKey', this.tags)
    },
    generateKeyword () {
      let tags = Array.from(new Set([...this.tags, ...this.textarea.split(/[(\r\n)\r\n]+/)])).filter(function (n) { return n })
      if (tags.length > this.defaultData.maxLen) {
        this.$message.error(`最多添加${this.defaultData.maxLen}个关键词`)
      } else {
        this.tags = tags
        this.textarea = ''
      }
    },
    delTag (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.dia-addkword-tyle {
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
      padding: 0px 30px;
      padding-top: 10px;
      color: #5a5c5e;
      .p-key {
        padding: 10px 0px 10px 0px;
      }
      .has-border {
        border: 1px solid rgba(225, 229, 238, 1);
        border-radius: 4px;
        min-height: 170px;
        margin-bottom: 40px;
        box-sizing: border-box;
        padding: 8px 12px;
        position: relative;
      }
      .el-textarea__inner {
        border: none;
        padding: 0;
        padding-bottom: 10px;
        // position: absolute;
        // bottom: -10px;
      }
      .txtarea {
        position: relative;
        min-height: 150px;
      }
      // .txtarea:before {
      //   content: '';
      //   position: absolute;
      //   bottom: 0;
      //   height: 10px;
      //   width: 100%;
      //   background: #fff;
      //   z-index: 9;
      // }
      .tag {
        margin: 4px;
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
