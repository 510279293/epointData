<template>
  <div>
    <el-dialog :visible.sync="defaultData.visible" width="30%" class="dia-monit-plan" @close="close">
      <span slot="title">
        <div class="ck-title"><span>{{defaultData.title}}</span></div>
      </span>
      <div class="ck-pop">
        <div class="ck-box">
          <div class="list">
            <p class="key">监控计划名称 :</p>
            <div>监控计划A</div>
          </div>
          <div class="list">
            <p class="key">执行日期 :</p>
            <div>5号、10号、15号、20号、25号、30号</div>
          </div>
          <div class="list">
            <p class="key">执行时间 :</p>
            <div>09:00、08:00</div>
          </div>
          <div class="list">
            <p class="key">执行周期 :</p>
            <div>每隔2月执行，共执行10个月</div>
          </div>
          <div class="list">
            <p class="key">监控类型 :</p>
            <div>关键词</div>
          </div>
          <div v-if="defaultData.type==='keyword'">
            <div class="list">
              <p class="key">平台 :</p>
              <div>淘宝、天猫、京东</div>
            </div>
            <div class="list">
              <p class="key">关键词 :</p>
              <div>
                <el-table :data="defaultData.data" border>
                  <el-table-column width="101" label="关键词">
                    <template scope="scope">
                      <span>尺码、颜色..</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="101" label="品牌">
                    <template scope="scope">
                      <span>百丽</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="164" label="低价区间">
                    <template scope="scope">
                      <span>5000-6000</span>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination class="table-pagintion" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="defaultData.pagingConfig.page" :page-size="defaultData.pagingConfig.size" :total="defaultData.pagingConfig.total" :pager-count="5" layout="prev, pager, next, total">
                </el-pagination>
              </div>
            </div>
            <div class="list">
              <p class="key">类目 :</p>
              <div>
                <p class="pad5"><span>淘宝&天猫：</span>类目名称1、类目名称2、类目名称3</p>
                <p class="pad5"><span>京东：</span>类目名称1、类目名称2、类目名称3</p>
              </div>
            </div>
            <div class="list">
              <p class="key">价格区间 :</p>
              <div>3,000-4,000元</div>
            </div>
            <div class="list">
              <p class="key">采集数量 :</p>
              <div>3000条</div>
            </div>
          </div>
          <div v-if="defaultData.type==='goodsLink'">
            <div class="list">
              <p class="key">商品链接 :</p>
              <div>
                <el-table :data="defaultData.data" border>
                  <el-table-column width="101" label="关键词">
                    <template scope="scope">
                      <span>尺码、颜色..</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="101" label="品牌">
                    <template scope="scope">
                      <span>百丽</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="164" label="低价区间">
                    <template scope="scope">
                      <span>5000-6000</span>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination class="table-pagintion" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="defaultData.pagingConfig.page" :page-size="defaultData.pagingConfig.size" :total="defaultData.pagingConfig.total" :pager-count="5" layout="prev, pager, next, total">
                </el-pagination>
              </div>
            </div>
          </div>

          <div v-if="defaultData.type==='shop'">
            <div class="list">
              <p class="key">店铺 :</p>
              <div>
                <p class="pad5"><span>淘宝：</span>店铺1、店铺2、店铺3</p>
                <p class="pad5"><span>天猫：</span>店铺1、店铺2、店铺3</p>
                <p class="pad5"><span>京东：</span>店铺1、店铺2、店铺3</p>
              </div>
            </div>
            <div class="list">
              <p class="key">店铺内关键词 :</p>
              <div>关键词1、关键词2、关键词3</div>
            </div>
            <div class="list">
              <p class="key">品牌 :</p>
              <div>无</div>
            </div>
          </div>

          <div v-if="defaultData.type==='sku'">
            <div class="list">
              <p class="key">平台 :</p>
              <div>淘宝、天猫、京东</div>
            </div>
            <div class="list">
              <p class="key">sku规格:</p>
              <div>
                <el-table :data="defaultData.data" border>
                  <el-table-column width="101" label="关键词">
                    <template scope="scope">
                      <span>尺码、颜色..</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="101" label="品牌">
                    <template scope="scope">
                      <span>百丽</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="164" label="低价区间">
                    <template scope="scope">
                      <span>5000-6000</span>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination class="table-pagintion" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="defaultData.pagingConfig.page" :page-size="defaultData.pagingConfig.size" :total="defaultData.pagingConfig.total" :pager-count="5" layout="prev, pager, next, total">
                </el-pagination>
              </div>
            </div>
            <div class="list">
              <p class="key">关键词 :</p>
              <div>关键词1、关键词2、关键词3</div>
            </div>
            <div class="list">
              <p class="key">品牌 :</p>
              <div>无</div>
            </div>
          </div>

          <div class="list">
            <p class="key">采集选项 :</p>
            <div>未选择</div>
          </div>
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
        title: '计划设置查询',
        visible: false,
        type: 'sku',
        // 表格数据
        data: [
          {}
        ],
        // 分页数据
        pagingConfig: {
          page: 1,
          size: 10,
          total: 100
        }
      }
    }
  },
  components: {},
  mounted () {
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
    close () {
      this.$emit('close')
      this.config.visible = false
    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.dia-monit-plan {
  .el-dialog__header {
    border-bottom: 1px solid #e1e5ee;
  }
  .el-dialog {
    min-width: 548px;
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
      padding: 20px;
      color: #5a5c5e;
      .list {
        display: flex;
        box-sizing: border-box;
        padding: 7px;
        .key {
          width: 100px;
          text-align: right;
          margin-right: 5px;
        }
        .pad5 {
          padding-top: 5px;
        }
        .pad5:nth-of-type(1) {
          padding: 0;
        }
      }
      .has-gutter {
        th {
          background: #f9fafc;
          padding: 6px;
          color: #9798ab;
        }
      }
    }
    // .ck-foot {
    //   text-align: right;
    //   border-top: 1px solid rgba(225, 229, 238, 1);
    //   box-sizing: border-box;
    //   padding: 16px 20px;
    // }
  }
}
</style>
<style lang="less">
@import '~assets/styles/variables';
.table-pagintion {
  text-align: right;
  padding: 10px 0px 0px;
  .btn-prev,
  .btn-next,
  .el-pager li,
  .el-pager li.btn-quicknext,
  .el-pager li.btn-quickprev,
  .el-pager li:last-child,
  span:not([class*='suffix']),
  button,
  .el-pagination__editor,
  .el-pagination__editor.el-input .el-input__inner {
    line-height: 28px;
    height: 28px;
    min-width: 28px;
  }
  .el-pagination__jump {
    margin-left: 0;
  }
  .el-pagination__total {
    color: @secondary-font;
    margin-left: 10px;
  }
}
</style>
