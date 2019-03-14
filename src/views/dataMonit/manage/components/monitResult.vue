<template>
  <div class="monitResult">
    <content-range :rowList="rowList" @callBack="search"></content-range>
    <epoint-btn :width="'116px'" style="margin: 20px 20px 0;" @click.native="boxShow = true">创建监控计划</epoint-btn>
    <pg-box :isShowBox="boxShow" @close="boxShow = false">
      <div class="box-content">
        <p class="box-title">新建监控计划<i class="el-icon-close"></i></p>
        <el-form ref="form" :model="formQuery" label-width="140px" :rules="rules" :inline="true">
          <div>
            <el-form-item label="监控计划名称：" prop="name" class="monit-name">
              <el-input size="medium" v-model="formQuery.name" placeholder="请输入监控计划名称，最多8个字符"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="执行日期:" prop="dates">
              <DateTime :listData="formQuery.dates"></DateTime>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="执行时间:" prop="times">
              <DayTime :listData="formQuery.times"></DayTime>
            </el-form-item>
          </div>
          <div class="executionCycle">
            <el-form-item label="执行周期:" prop="executionCycle">
              <div class="cycle-item">
                <el-radio v-model="formQuery.executionCycle.type" label="1">每月执行，共执行</el-radio>
                <el-input v-model="formQuery.executionCycle.num1"></el-input>月
              </div>
              <div class="cycle-item">
                <el-radio v-model="formQuery.executionCycle.type" label="2">每周执行，共执行</el-radio>
                <el-input v-model="formQuery.executionCycle.num2"></el-input>周
              </div>
            </el-form-item>
          </div>
          <div class="monitor-type">
            <el-form-item label="监控类型:" prop="monitorType">
              <el-radio-group v-model="formQuery.monitorType" @change="clearForm">
                <el-radio :label="index + ''" v-for="(item, index) in monitorTypeList" :key="index">{{item}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div v-if="formQuery.monitorType==='0'">
            <div class="plat-checkList">
              <el-form-item label="平台:" prop="checkList">
                <el-checkbox-group v-model="formQuery.checkList">
                  <el-checkbox label="1">淘宝</el-checkbox>
                  <el-checkbox label="2">天猫</el-checkbox>
                  <el-checkbox label="3">京东</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>
            <div class="key-word">
              <div class="el-form-item">
                <div class="lf-lable el-form-item__label">关键词 :</div>
                <div class="lf-content el-form-item__content">
                  <div>
                    <epoint-btn :width="'116px'" style="margin-right: 20px;" @click.native="newParamFuc">创建关键词</epoint-btn>
                    <epoint-btn :width="'116px'">批量导入</epoint-btn>
                  </div>
                </div>
                <popTable :tableData="popTableData" @tableDetailEdit="tableDetailEdit" v-if="popTableData.length > 0" @delRow="delPopTableRow"></popTable>
              </div>
            </div>
            <div class="platform-select">
              <el-form-item label="类目:" prop="platformPart">
                <el-input placeholder="请输入内容" v-model="formQuery.platformPart.platformTag" class="input-with-select">
                  <el-select v-model="formQuery.platformPart.platformSelect" slot="prepend" placeholder="请选择">
                    <el-option label="淘宝&天猫" value="1"></el-option>
                    <el-option label="京东" value="2"></el-option>
                  </el-select>
                  <el-button slot="append" @click="appendTag(formQuery.platformPart.platformSelect, formQuery.platformPart.platformTag)">添加</el-button>
                </el-input>
                <div class="tag-list" v-if="formQuery.platformPart.tagsTM.length > 0">
                  <span>淘宝&天猫：</span>
                  <el-tag v-for="(tag, index) in formQuery.platformPart.tagsTM" :key="index + 'tmt'" closable :disable-transitions="false" type="" @close="handleClose(tag, formQuery.platformPart.tagsTM)">{{tag}}</el-tag>
                </div>
                <div class="tag-list" v-if="formQuery.platformPart.tagsJD.length > 0">
                  <span>京东：</span>
                  <el-tag v-for="(tag, index) in formQuery.platformPart.tagsJD" :key="index + 'jdt'" closable :disable-transitions="false" type="" @close="handleClose(tag, formQuery.platformPart.tagsJD)">{{tag}}</el-tag>
                </div>
              </el-form-item>
            </div>
            <div class="priceBtw">
              <el-form-item label="价格区间:" prop="oneForMore">
                <priceItem :index="0" class="price-bet"></priceItem>
              </el-form-item>
            </div>
          </div>
          <div v-if="formQuery.monitorType==='1'">
            <el-form-item label="商品链接:" prop="">
              <epoint-btn :width="'116px'" @click.native="newParamFuc">新增链接</epoint-btn>
            </el-form-item>
            <linkTable :tableData="prdTable" @delRow="delLinkRow" v-if="prdTable.length > 0"></linkTable>
          </div>
          <div v-if="formQuery.monitorType==='2'" class="shopModule">
            <el-form-item label="店铺:" prop="" class="skuTip">
              <epoint-btn :width="'116px'" @click.native="newParamFuc">新增店铺</epoint-btn>
            </el-form-item>
            <div class="tag-list" v-if="formQuery.shopData.shopTags.jd.length > 0">
              <span>京东：</span>
              <el-tag v-for="(tag, index) in formQuery.shopData.shopTags.jd" :key="index + 'jdt'" closable :disable-transitions="false" type="" @close="handleClose(tag, formQuery.shopData.shopTags.jd)">{{tag}}</el-tag>
            </div>
            <el-form-item label="店铺内关键词:" prop="">
              <el-input size="medium" class="wid466" placeholder="最多输入十个关键词"></el-input>
            </el-form-item>
            <el-form-item label="品牌:" prop="">
              <el-input size="medium" class="wid466" placeholder="输入平台品牌"></el-input>
            </el-form-item>
          </div>

          <div v-if="formQuery.monitorType==='3'">
            <el-form-item label="SKU规格:" prop="" class="shopTip">
              <epoint-btn :width="'116px'" @click.native="newParamFuc">新增sku</epoint-btn>
            </el-form-item>
            <skuTable :tableData="skuTableData" @tableDetailEdit="skuTableEdit" v-if="skuTableData.length > 0" @delRow="delSkuTableRow"></skuTable>

            <el-form-item label="关键词:" prop="">
              <el-input size="medium" class="wid466" placeholder="输入关键词"></el-input>
            </el-form-item>
            <el-form-item label="品牌:" prop="">
              <el-input size="medium" class="wid466" placeholder="输入平台品牌"></el-input>
            </el-form-item>
          </div>

          <div>
            <el-form-item label="采集选项:" prop="oneForMore">
              <el-checkbox-group v-model="formQuery.oneForMore">
                <el-checkbox label="1">一链多款</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div>
            <div class="el-form-item">
              <div class="lf-lable el-form-item__label">预计SPU总量:</div>
              <div class="lf-content el-form-item__content" style="max-width: 452px;line-height: 20px;padding-top: 8px;">
                0条（通过 <span style="color: #5858F1;">去计算</span> 预计本计划的 采集量/天）<br />5000条（剩余抓取量6000条/天）<br />5000条（剩余抓取量3000条/天，请精简关键词或联系客户经理升级 每天最大抓取量）
              </div>
            </div>
          </div>
          <div class="sub-box">
            <epoint-btn :width="'116px'" :bgcolor="'#8F97B0'">取消</epoint-btn>
            <epoint-btn :width="'116px'" @click="confirmData">提交</epoint-btn>
          </div>
        </el-form>

        <dialogKey v-if="keyConfig.visible" :config="keyConfig" @close="addKeyClose" @sureAddKey="sureAddKey"></dialogKey>

      </div>
    </pg-box>

    <div class="content-table">
      <epoint-table ref="table" :data="data" :showIndex="true" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column width="150" label="计划名称" prop="content">
          <template slot-scope="scope">
            <p class="colorBlue">计划名称A</p>
          </template>
        </el-table-column>
        <el-table-column width="100" label="监控周期" prop="channelName">
          <template slot-scope="scope">
            <p>每周一 12:30</p>
          </template>
        </el-table-column>
        <el-table-column width="146" label="抓取时间" prop="totalSalesQty">
          <template slot-scope="scope">
            <p>2018/08/09 12:30:30</p>
          </template>
        </el-table-column>
        <el-table-column width="136" label="商品总数" prop="salesQty">
          <template slot-scope="scope">
            <p @click="toGoodsList" class="colorBlue">123456</p>
          </template>
        </el-table-column>
        <el-table-column width="140" label="店铺数" prop="daySalesQty">
          <template slot-scope="scope">
            <p @click="toShopList" class="colorBlue">123</p>
          </template>
        </el-table-column>
        <el-table-column width="150" label="低价商品数" prop="daySalesQty">
          <template slot-scope="scope">
            <p @click="toProtection" class="colorBlue">123</p>
          </template>
        </el-table-column>
        <el-table-column label="盗图商品数" width="150" prop="daySalesQty">
          <template slot-scope="scope">
            <p @click="toProtection" class="colorBlue">去设置</p>
          </template>
        </el-table-column>
        <el-table-column label="采集状态" prop="daySalesQty">
          <template slot-scope="scope">
            <p>已完成</p>
          </template>
        </el-table-column>
        <el-table-column width="40">
          <template slot-scope="scope">
            <el-dropdown trigger="click" @command="handleCommand($event,scope)">
              <i class="el-icon-more more-rotate"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">查看历史</el-dropdown-item>
                <el-dropdown-item command="b">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column type="expand" width="0" class-name="disnone">
          <template slot-scope="props">
            <div class="his-list">
              <p style="width:152px">2018/08/09 12:30:30</p>
              <p style="width:142px">123456</p>
              <p style="width:146px">123</p>
              <p style="width:156px">123</p>
              <p style="width:156px">鍘昏®剧疆</p>
              <p style="width:116px">宸插畬鎴</p>
            </div>
            <div class="his-list">
              <p style="width:152px">2018/08/09 12:30:30</p>
              <p style="width:142px">123456</p>
              <p style="width:146px">123</p>
              <p style="width:156px">123</p>
              <p style="width:156px">鍘昏®剧疆</p>
              <p style="width:116px">宸插畬鎴</p>
            </div>
          </template>
        </el-table-column>
      </epoint-table>
      <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
      </epoint-pagination>
    </div>
  </div>
</template>

<script>
import contentRange from '@/components/content/contentRange/index.vue'
import priceItem from '@/components/form/priceItem.vue'
import popTable from './tableDetail/index.vue'
import skuTable from './skuTable/index.vue'
import linkTable from './linkTable/index.vue'
import dialogKey from './dialogKey/index.vue'
import mock from '@/mock/mock-for-table1'
import historyTable from './historyTable/index.vue'
export default {
  data () {
    return {
      // 表格数据
      keyWords: '', // 弹窗内添加关键词
      kwDialogVisible: false, // 添加关键词弹窗
      brandName: '', // 品牌名称
      data: [],
      // 分页数据
      pagingConfig: {
        page: 1,
        size: 10,
        total: 100
      },
      monitorTypeList: ['关键词', '商品链接', '店铺', 'SKU规格'],
      formQuery: { // 表单数据
        name: '',
        dates: {
          checkDate: [],
          checkWeek: []
        },
        times: [],
        executionCycle: {
          type: '1', // 1按周 2按月
          num1: 0, // 周次数
          num2: 0 // 月次数
        },
        monitorType: '0', // 0:关键词 1:商品链接 2:店铺 3:SKU描述
        checkList: [], // 平台
        oneForMore: [], // 一链多款
        platformPart: {
          platformSelect: '1', // 平台选择
          platformTag: '', // 新增标签
          tagsTM: [], // taglist 天猫
          tagsJD: [] // taglist 京东
        },
        shopData: {
          shopTags: {
            tm: [],
            tb: [],
            jd: []
          }
        }
      },
      keyConfig: {
        visible: false,
        title: '新建关键词',
        maxLen: 4,
        placeholder1: '每输入一个关键词，按Enter键结束',
        placeholder2: '',
        brand: '',
        keyWord: [],
        lowprice: { min: '', max: '' },
        midprice: { min: '', max: '' }
      },
      rules: { // 输入验证
        name: [
          { required: true, message: '请输入监控计划名称', trigger: 'blur' }
        ],
        dates: [
          { required: true, message: '请选择执行日期', trigger: 'change' }
        ],
        times: [
          { required: true, message: '请选择执行时间', trigger: 'change' }
        ]
      },
      isWeek: false, // 按周执行 or 按月执行
      weekInput: '', // 周次数
      mouthInput: '', // 月次数
      boxShow: false, // 右侧滑入弹窗
      rowList: [
        [
          {
            type: 'input',
            label: '计划名称',
            model: 'commodityName'
          },
          {
            type: 'select',
            label: '采集状态',
            options: [],
            model: 'channel',
            optionsLabel: 'name',
            optionsValue: 'id'
          },
          {
            type: 'date',
            label: '抓取时间',
            model: 'commodityName',
            startLabel: '',
            endLabel: ''
          }
        ]
      ],
      popTableData: [], // 关键词表格数据
      prdTable: [], // 商品链接表格数据
      skuTableData: [] // sku表格数据
    }
  },
  props: {},
  components: {
    contentRange,
    priceItem,
    popTable,
    skuTable,
    linkTable,
    DateTime: () => import('./dateTime/index.vue'),
    DayTime: () => import('./dayTime/index.vue'),
    dialogKey,
    historyTable
  },
  mounted () {
    this.getCommodityData()
    this.init()
  },
  computed: {
    curTags () {
      return this.formQuery.platformPart.platformSelect === '1' ? this.formQuery.platformPart.tagsTM : this.formQuery.platformPart.tagsJD
    }
  },
  methods: {
    confirmData () { // 表单提交
      console.log()
    },
    newParamFuc () { // 新增操作
      this.clearForm()
      this.showAddKeyDia()
    },
    delSkuTableRow (index) {
      this.skuTableData.splice(index, 1)
    },
    delPopTableRow (index) {
      this.popTableData.splice(index, 1)
    },
    delLinkRow (index) {
      this.prdTable.splice(index, 1)
    },
    tableDetailEdit (key) {
      let val = this.popTableData[key]
      console.log(val, 'val-------')
      if (!Array.isArray(val.keyWord)) {
        val.keyWord = val.keyWord.split(',')
      }
      this.keyConfig = Object.assign({}, this.keyConfig, val)
      this.showAddKeyDia()
    },
    skuTableEdit (key) {
      let val = this.skuTableData[key]
      console.log(val, 'val-----skuTableData')
      if (!Array.isArray(val.keyWord)) {
        val.keyWord = val.keyWord.split(',')
      }
      this.keyConfig = Object.assign({}, this.keyConfig, val)
      this.showAddKeyDia()
    },
    clearForm (val) {
      this.keyConfig = {
        visible: false,
        title: '新建关键词',
        maxLen: 4,
        placeholder1: '每输入一个关键词，按Enter键结束',
        placeholder2: '',
        brand: '',
        keyWord: [],
        lowprice: { min: '', max: '' },
        midprice: { min: '', max: '' }
      }
    },
    handleClose (tag, arr) {
      arr.splice(arr.indexOf(tag), 1)
    },
    appendTag (key, tag) {
      this.curTags.push(tag)
      this.formQuery.platformPart.platformTag = '' // 清空输入
      // if (key === '1') { // 天猫
      //   this.formQuery.platformPart.tagsTM.push(tag)
      // } else { // 京东
      //   this.formQuery.platformPart.tagsJD.push(tag)
      // }
    },
    // 初始化数据
    init () {
      this.pagingConfig.page = 1
      this.getCommodityData()
    },
    // 显示数量切换
    handleSizeChange (val) {
      this.pagingConfig.size = val
      this.getCommodityData()
    },
    // 页码切换
    handleCurrentChange (val) {
      this.pagingConfig.page = val
      this.getCommodityData()
    },
    // 获取商品管理列表
    getCommodityData () {
      this.data = mock
    },
    // range回调
    search (value) {
      console.log(value, 'fromCallBack')
    },
    handleCommand (command, scope) {
      console.log(arguments)
      if (command === 'a') {
        // this.$router.push('/channel/commodity/statisticalDetail')
        console.log(this.$refs.table.$children[0])
        this.$refs.table.$children[0].toggleRowExpansion(scope.row, true) // 官网方法，重点。
      }
      if (command === 'b') {
        // this.$router.push('/channel/commodity/skuDetail')
      }
      // this.toggleRowExpansion(arguments[1], true)
    },
    toggleRowExpansion (row, expanded) {
      console.log(row)
    },
    toShopList () {
      console.log(this.$parent.isShow = false)
      this.$router.push('/dataMonit/manage/shopList')
    },
    toGoodsList () {
      this.$parent.isShow = false
      this.$router.push('/dataMonit/manage/goodsList')
    },
    toProtection () {
      this.$router.push('/dataMonit/protection')
    },
    addKeyClose () {
      this.keyConfig.visible = false
    },
    sureAddKey (val, type) {
      console.log(type, 'type-type')
      if (type === '0') {
        this.popTableData.push({
          keyWord: val.tags.join(','),
          brand: val.brandInput,
          lowprice: this.formatPrice(val.priceItemVal)[0],
          midprice: this.formatPrice(val.priceItemVal)[1]
        })
      } else if (type === '1') {
        this.prdTable.push({
          links: val.tags.join(','),
          lowprice: this.formatPrice(val.priceItemVal)[0]
        })
      } else if (type === '2') {
        this.formQuery.shopData.shopTags.jd = [...val.tags]
      } else if (type === '3') {
        this.skuTableData.push({
          keyWord: val.tags.join(','),
          brand: val.brandInput,
          lowprice: this.formatPrice(val.priceItemVal)[0],
          midprice: this.formatPrice(val.priceItemVal)[1]
        })
      }
    },
    formatPrice (arr) {
      let newArr = []
      for (let key in arr) {
        newArr.push(arr[key])
      }
      return newArr
    },
    showAddKeyDia () {
      this.keyConfig.visible = true
      if (this.formQuery.monitorType === '0') {  //关键词弹窗
        this.keyConfig = Object.assign({}, this.keyConfig, {
          type: '0',
          title: '新建关键词',
          placeholder1: '允许一次性输入最多500个关键词',
          placeholder2: '可继续输入关键词'        })
      }
      if (this.formQuery.monitorType === '1') {  //商品链接弹窗
        this.keyConfig = Object.assign({}, this.keyConfig, {
          type: '1',
          title: '添加商品链接',
          desc: '商品链接',
          placeholder1: '允许一次性输入多条商品链接，每条链接单独一行',
          placeholder2: '可继续输入商品链接'        })
      }
      if (this.formQuery.monitorType === '2') {  //添加店铺弹窗
        this.keyConfig = Object.assign({}, this.keyConfig, {
          type: '2',
          title: '添加店铺',
          desc: '店铺名称',
          placeholder1: '允许一次性输入多个店铺名称或旺旺号，每个店铺单独一行'        })
      }
      if (this.formQuery.monitorType === '3') {  //添加SKU弹窗
        this.keyConfig = Object.assign({}, this.keyConfig, {
          type: '3',
          title: '新建SKU',
          desc: 'SKU规格',
          placeholder1: '允许一次输入多个SKU，每个SKU单独一行'        })
      }
    }
  }
}

</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.monitResult {
  .content-table {
    padding: 20px;
  }
  .more-rotate {
    transform: rotateZ(90deg);
  }
  .colorBlue {
    color: #5858f1;
  }
  .wid466 {
    width: 466px;
  }
}
</style>

<style lang="less">
@import '~assets/styles/qkwyq';

.monitResult {
  .content-table {
    .el-table__expanded-cell {
      background: #fafafa;
      z-index: 999;
      padding: 0;
      .his-list:nth-of-type(1) {
        border-top: none;
      }
    }
    .el-table__expanded-cell::hover {
      background: #fafafa;
    }
    .disnone {
      // display: none;
      // width: 0px;
    }
  }
  .box-content {
    .box-title {
      .hg(55px);
      padding-left: 15px;
      position: relative;
      color: #5a5c5e;
      font-size: 14px;
      border-bottom: 1px solid #e1e5ee;
      .el-icon-close {
        position: absolute;
        top: 18px;
        right: 15px;
        color: #ccccd9;
        font-size: 18px;
        font-weight: 800;
      }
    }
    .plat-checkList {
      .el-form-item__label {
        .import-star(48px);
      }
    }
    .key-word {
      .el-form-item__label {
        .import-star(66px);
      }
    }
    .monitor-type {
      .el-form-item__label {
        .import-star(78px);
      }
    }
    .executionCycle {
      .el-form-item__label {
        .import-star(78px);
      }
      .el-input {
        width: 50px;
        margin: 0 5px;
        .el-input__inner {
          text-align: center;
        }
      }
      .cycle-item {
        display: inline-block;
      }
      .cycle-item + .cycle-item {
        margin-left: 40px;
      }
    }
    .platform-select {
      .el-form-item .input-with-select {
        width: 455px;
      }
      .el-input-group__prepend {
        width: 100px;
        padding: 0;
      }
      .el-input-group__prepend .el-select {
        height: 34px;
        margin: 0;
      }
      .el-input__inner {
        width: 110px;
      }
      .input-with-select > .el-input__inner {
        width: 283px;
      }
      .input-with-select > .el-input-group__append {
        color: #fff;
        background: #5cc48a;
        border: 0;
      }
    }
    .tag-list {
      width: 100%;
      min-height: 34px;
      width: 546px;
      color: #5a5c5e;
      font-size: 14px;
      padding: 5px 5px 5px 10px;
      line-height: 34px;
      border: 1px solid #e1e5ee;
      border-radius: 8px;
      margin-top: 10px;
      box-sizing: border-box;
      .el-tag {
        color: #5a5c5e;
        background: #f6f9f9;
        height: 26px;
        line-height: 24px;
        font-size: 14px;
        margin-right: 5px;
        border: 0;
        i {
          color: #c0cad3;
        }
      }
    }
    .skuTip .el-form-item__label {
      .import-star(48px);
    }
    .shopTip .el-form-item__label {
      .import-star(78px);
    }
    .shopModule {
      .tag-list {
        margin: 0 0 20px 86px;
      }
    }
    .priceBtw {
      .el-form-item__content {
        line-height: 0;
      }
      // .el-form-item .el-form-item__content .el-form{
      //   padding-top: 0;
      // }
      .price-bet {
        position: relative;
      }
      .price-bet::before {
        position: absolute;
        top: 0;
        right: -25px;
        content: '元';
      }
    }
    .sub-box {
      text-align: right;
      margin: 20px 0 38px;
      padding-right: 40px;
      .epoint-btn + .epoint-btn {
        margin-left: 10px;
      }
    }
    .lf-lable {
      width: 140px;
    }
    & > .el-form {
      padding-top: 20px;
      .el-form-item {
        .w100;
      }
      .monit-name {
        .el-form-item__content {
          width: 466px;
        }
      }
    }
  }
  .kw-dialog {
    .el-dialog__header {
      border-bottom: 1px solid #e1e5ee;
    }
    .el-dialog__body {
      padding: 20px 30px 25px;
      color: #5a5c5e;
      font-size: 14px;
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
        .price-bet {
          margin-left: 15px;
        }
      }
    }
    .el-dialog__footer {
      border-top: 1px solid #e1e5ee;
    }
  }
}
.his-list {
  display: flex;
  background: #fafafa;
  box-sizing: border-box;
  padding: 15px 0px;
  padding-left: 320px;
  border-top: 1px solid #e1e5ee;
  p {
    padding-left: 10px;
    box-sizing: border-box;
  }
}
</style>
