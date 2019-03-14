<template>
  <div class="">
    <el-dialog :visible.sync="defaultData.visible" width="30%" class="dia-see-reason" @close="close">
      <span slot="title">
        <div class="ck-title"><span>原因分析</span><span class="title-center">{{defaultData.time}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <div class="contrast-list contrast-header">
            <div class="contrast-name">对比</div>
            <div class="contrast-before">改动前</div>
            <div class="contrast-after">改动后</div>
          </div>
          <div class="contrast-list">
            <div class="contrast-name">活动</div>
            <div class="contrast-before">满100减20</div>
            <div class="contrast-after">满100减20 满200减30 免邮</div>
          </div>
          <div class="contrast-list">
            <div class="contrast-name">价格</div>
            <div class="contrast-before">￥300.00</div>
            <div class="contrast-after">无</div>
          </div>
          <div class="contrast-list">
            <div class="contrast-name">标题</div>
            <div class="contrast-before">2018秋季爆款人手一件入手 绝对不后悔的好货还在等什 么呢</div>
            <div class="contrast-after">无</div>
          </div>
          <div class="contrast-list">
            <div class="contrast-name">图片</div>
            <div class="contrast-before"><img src="https://gd1.alicdn.com/imgextra/i1/2119676327/O1CN011wboMi8AwtZeEQ6_!!2119676327.jpg_400x400.jpg_.webp"></div>
            <div class="contrast-after"><img src="https://img.alicdn.com/imgextra/i2/3686965229/TB2XW3nolyWBuNkSmFPXXXguVXa_!!3686965229.jpg_430x430q90.jpg"></div>
          </div>
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
        time: '2018/08/01'
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
      console.log(this.config)
      if (this.config.visible) {
        Object.assign(this.defaultData, this.config)
      } else {

      }
    }
  },
  methods: {
    close () {
      this.defaultData.visible = false
      this.$emit('close')
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.dia-see-reason {
  .el-dialog__header {
    border-bottom: 1px solid #e1e5ee;
  }
  .el-dialog__body {
    padding: 0;
  }
  .el-dialog {
    width: 548px !important;
  }
  .ck-title {
    position: relative;
    .title-center {
      position: absolute;
      left: 42%;
    }
  }
  .ck-pop {
    box-sizing: border-box;
    padding: 15px 28px 18px;
    .ck-box {
      position: relative;
      color: #5a5c5e;
      border: 1px solid #e1e5ee;
      .contrast-header {
        background: #f9fafc;
        border-top: none !important;
        min-height: 36px !important;
        height: 36px;
        color: #aeafbf;
      }
      .contrast-list {
        display: flex;
        align-items: center;
        min-height: 45px;
        border-top: 1px solid #e1e5ee;
        line-height: 20px;
        .contrast-name {
          width: 100px;
          text-align: center;
          box-sizing: border-box;
          padding: 10px;
        }
        .contrast-before {
          width: 194px;
          box-sizing: border-box;
          padding: 10px;
          img {
            width: 114px;
            height: 114px;
          }
        }
        .contrast-after {
          width: 194px;
          box-sizing: border-box;
          padding: 10px;
          img {
            width: 114px;
            height: 114px;
          }
        }
        .contrast-name,
        .contrast-before,
        .contrast-after {
          height: 100%;
        }
      }
    }
    .ck-box:before {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 100px;
      border-right: 1px solid #e1e5ee;
    }
    .ck-box:after {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 294px;
      border-right: 1px solid #e1e5ee;
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
