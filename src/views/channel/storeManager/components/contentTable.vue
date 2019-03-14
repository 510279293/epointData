<template>
  <div class="content-table">
    <epoint-table :data="data" :showIndex="true" :showItem="true" :config="ckBoxConfig" @sure="sureCkBox" :showSelection="true" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
      <el-table-column width="220" label="店铺名称">
        <template scope="scope">
          <span class="g-name dis-flex">
            <span @click="toStoreUrl(scope)" class="overflow-ellipsis">{{scope.row.name}}</span>
            <el-tag @click.native="showDiaAddShop" :type="scope.row.auth_flag?'success':'info'" size="mini">{{scope.row.auth_flag?'取消授权':'点击授权'}}</el-tag>
          </span>
        </template>
      </el-table-column>
      <el-table-column width="100" label="平台">
        <template scope="scope">
          <span>{{scope.row.channel}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="相关商品数" sortable>
        <template scope="scope">
          <span @click="toStoreGoodsDetail" class="g-name">{{scope.row.goods_count}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="昨日销量" sortable>
        <template scope="scope">
          <span>{{scope.row.daySalesQty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="140" label="昨日销售额" sortable>
        <template scope="scope">
          <span>{{scope.row.salesAmount}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="总近30天销量" sortable>
        <template scope="scope">
          <span>{{scope.row.sales_qty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="总销量" sortable>
        <template scope="scope">
          <span>{{scope.row.totalSalesQty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="总销售额" sortable>
        <template scope="scope">
          <span>{{scope.row.totalSalesQty}}</span>
        </template>
      </el-table-column>
      <el-table-column width="160" label="旺旺号">
        <template scope="scope">
          <span>{{scope.row.ww||'旺旺号'}}</span>
        </template>
      </el-table-column>
      <el-table-column width="160" label="店铺等级" sortable>
        <template scope="scope">
          <!-- <span>{{scope.row.dj||'店铺等级'}}</span> -->
          <span>
            <epoint-grade :score="888"></epoint-grade>
          </span>
        </template>
      </el-table-column>
      <el-table-column width="160" label="所在省市">
        <template scope="scope">
          <span>{{scope.row.state}}{{scope.row.city}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="30天售后率">
        <template scope="scope">
          <span>{{scope.row.refund_rate}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="30天纠纷率">
        <template scope="scope">
          <span>{{scope.row.issue_rate}}</span>
        </template>
      </el-table-column>
      <el-table-column width="130" label="30天售后速度(天)">
        <template scope="scope">
          <span>{{scope.row.refund_speed}}</span>
        </template>
      </el-table-column>
      <el-table-column width="280" label="店铺评分">
        <template scope="scope">
          <span class="updown">
            <span>描述{{scope.row.describe_score.toFixed(1)}}
              <i class="el-icon-caret-top up" v-if="scope.row.describe_trend"></i>
              <i class="el-icon-caret-bottom down" v-else></i>
            </span>
            <span>服务{{scope.row.service_score.toFixed(1)}}
              <i class="el-icon-caret-top up" v-if="scope.row.service_trend"></i>
              <i class="el-icon-caret-bottom down" v-else></i>
            </span>
            <span>物流{{scope.row.logistics_score.toFixed(1)}}
              <i class="el-icon-caret-top up" v-if="scope.row.logistics_trend"></i>
              <i class="el-icon-caret-bottom down" v-else></i>
            </span>
          </span>
        </template>
      </el-table-column>
      <el-table-column width="40" fixed="right">
        <template slot-scope="scope">
          <el-dropdown trigger="click" @command="handleCommand">
            <i class="el-icon-more more-rotate"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">统计分析</el-dropdown-item>
              <el-dropdown-item command="b">查看SKU</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </epoint-table>
    <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
    <diaAddShop :config="addConfig" @sureAdd="sureAdd" @close="addDialogClose"></diaAddShop>
    <!-- <dia-ckbox :config="ckBoxConfig" @sure="sureCkBox"></dia-ckbox> -->
  </div>
</template>

<script>
import diaAddShop from '@/components/dialogs/diaAddShop.vue'
import diaCkbox from '@/components/dialogs/diaCkbox.vue'
import mock from '@/mock/qdStore.json'
export default {
  data () {
    return {
      // 表格数据
      data: [],
      // 分页数据
      pagingConfig: {
        page: 1,
        size: 10,
        total: 100
      },
      addConfig: {
        title: '新建店铺',
        visible: false,
        type: 'auth'
      },
      ckBoxConfig: {
        list: [
          { id: '1', name: '总销售额' },
          { id: '2', name: '近30天销量' },
          { id: '3', name: '店铺等级' },
          { id: '4', name: '店铺评分' },
          { id: '5', name: '所在省市' },
          { id: '6', name: '30天售后率' },
          { id: '7', name: '30天纠纷率' },
          { id: '8', name: '30天售后速度' }
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
  props: {
  },
  components: {
    diaAddShop,
    diaCkbox
  },
  mounted () {
    this.getCommodityData()
    this.init()
  },
  computed: {
  },
  watch: {
  },
  methods: {
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
      this.data = mock.data.records
    },
    showDiaAddShop () {
      console.log(123)
      this.addConfig.visible = true
    },
    sureAdd (formdata) {
      console.log(formdata)
    },
    addDialogClose () {
      this.addConfig.visible = false
    },
    toStoreUrl () {
      console.log('去相关平台店铺页面')
    },
    toStoreGoodsDetail () {
      this.$router.push('/channel/storeManager/storeGoodsDetail')
    },
    // showTableDialog () {
    //   console.log(56)
    //   this.ckBoxConfig.visible = true
    // },
    sureCkBox (emitdata) {
      console.log(emitdata)
    },
    handleCommand (command) {
      if (command === 'a') {
        this.$router.push('/channel/commodity/statisticalDetail')
      }
      if (command === 'b') {
        this.$router.push('/channel/commodity/skuDetail')
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.content-table {
  padding: 20px;
  .more-rotate {
    transform: rotateZ(90deg);
  }
}
</style>
<style lang="less">
@import '~assets/styles/variables';
.content-table {
  .dis-flex {
    display: flex;
    justify-content: space-between;
  }
  .overflow-ellipsis {
    // display: inline-block;
    max-width: 140px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .i-header {
    color: #ccccd9;
    margin-left: 5px;
  }
  .g-name {
    color: #5858f1;
  }
  .updown {
    display: flex;
    align-items: center;
    i {
      position: relative;
      top: -6px;
      margin-right: 5px;
    }
    .red {
      color: #ff4e50;
    }
    .green {
      color: #44c789;
    }
  }
  .up,
  .down {
    position: relative;
  }
  .up {
    color: #ff4e50;
  }
  .down {
    color: #44c789;
  }
  .up:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 2px;
    background: #ff4e50;
    left: 6px;
    top: 8px;
  }
  .down:before {
    top: 10px;
    position: relative;
  }
  .down:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 2px;
    background: #44c789;
    left: 6px;
    top: 5px;
  }
}
</style>
