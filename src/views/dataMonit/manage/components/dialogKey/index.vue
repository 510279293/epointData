<template>
  <el-dialog :visible.sync="config.visible" width="760px" class="dia-addkword-tyle" @close="close" :modal-append-to-body="false">
    <span slot="title">
      <div class="ck-title"><span>{{config.title}}</span></div>
    </span>
    <div class="ck-pop">
      <div class="ck-box">
        <p class="p-key">{{config.desc}}</p>
        <div class="has-border">
          <div class="tags">
            <el-tag v-for="tag in tags" :key="tag.name" closable type="info" size="small" class="tag" @close="delTag(tag)">
              {{tag}}
            </el-tag>
          </div>
          <el-input type="textarea" class="txtarea" :placeholder="tags.length > 0 ? config.placeholder2 : config.placeholder1" v-model="textarea" :autosize="{ minRows: 7, maxRows: 7}" @keyup.enter.native="generateKeyword" @blur="generateKeyword">
          </el-input>
        </div>
        <div v-if="config.type=='0'">
          <p class="body-title">品牌</p>
          <el-input placeholder="请输入品牌名称" class="brand-name" v-model="brandInput"></el-input>
          <div class="price-btw">
            <span>非授权低价区间</span>
            <priceItem @comFormList="comFormList" :popform="config.lowprice" :index="0" class="price-bet"></priceItem>
          </div>
          <div class="price-btw">
            <span>授权店低价区间</span>
            <priceItem @comFormList="comFormList" :popform="config.midprice" :index="1" class="price-bet"></priceItem>
          </div>
        </div>
        <div v-if="config.type=='1'">
          <div class="price-btw">
            <span>低价区间</span>
            <priceItem @comFormList="comFormList" :index="2" class="price-bet"></priceItem>
          </div>
        </div>
        <div v-if="config.type=='3'">
          <div class="price-btw">
            <span>非授权店低价区间</span>
            <priceItem @comFormList="comFormList" :popform="config.lowprice" :index="3" class="price-bet"></priceItem>
          </div>
          <div class="price-btw">
            <span>授权店低价区间</span>
            <priceItem @comFormList="comFormList" :popform="config.midprice" :index="4" class="price-bet"></priceItem>
          </div>
        </div>
      </div>
      <div class="ck-foot">
        <el-button type="info" size="medium" @click="close">取消</el-button>
        <el-button type="primary" size="medium" @click="sureAddKey">确认</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import priceItem from '@/components/form/priceItem.vue'
export default {
  data () {
    console.log(this.config, 'config-config')
    return {
      textarea: '',
      tags: this.config.keyWord,
      brandInput: this.config.brand, // 输入的品牌
      priceItemVal: {} // 价格区间
    }
  },
  props: {
    config: {
      type: Object,
      default: () => { 
        return {
          visible: true,
          title: '新建关键词',
          maxLen: 10,
          desc: '关键词'
        }
      }
    }
  },
  components: {
    priceItem
  },
  mounted () { },
  computed: {},
  methods: {
    comFormList (val) { // 价格区间数据
      this.priceItemVal[val.index] = val.value
    },
    close () {
      this.$emit('close')
      this.initEmpty()
    },
    sureAddKey () {
      this.$emit('close')
      let moduleVal = {
        priceItemVal: this.priceItemVal,
        tags: this.tags,
        brandInput: this.brandInput
      }
      this.$emit('sureAddKey', moduleVal, this.config.type)
      // 清空数据
      this.brandInput = ''
      this.priceItemVal = {}
    },
    generateKeyword () {
      let tags = Array.from(new Set([...this.tags, ...this.textarea.split(/[(\r\n)\r\n]+/)])).filter(function (n) { return n })
      if (tags.length > this.config.maxLen) {
        this.$message.error(`最多添加${this.config.maxLen}个关键词`)
      } else {
        this.tags = tags
        this.textarea = ''
      }
    },
    delTag (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    initEmpty () {
      this.textarea = ''
      this.tags = []
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
@import '~assets/styles/qkwyq';
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
      margin-bottom: 20px;
      .p-key {
        padding: 10px 0px 10px 0px;
      }
      .has-border {
        border: 1px solid rgba(225, 229, 238, 1);
        border-radius: 4px;
        min-height: 170px;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 0px 12px;
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
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .ck-foot {
      text-align: right;
      border-top: 1px solid rgba(225, 229, 238, 1);
      box-sizing: border-box;
      padding: 16px 20px;
    }
    .body-title {
      .hg(20px);
    }
    .brand-name {
      margin-top: 10px;
      width: 466px;
    }
    .el-textarea {
      margin: 10px 0 20px;
    }
    .price-btw {
      display: flex;
      align-items: center;
      padding-top: 20px;
      box-sizing: border-box;
      &>span{
        display: inline-block;
        min-width: 120px;
      }
      .price-bet {
        margin-left: 15px;
      }
    }
  }
}
</style>
