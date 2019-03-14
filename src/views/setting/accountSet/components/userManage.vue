<template>
  <div class="userManage">
    <div class="store-btns">
      <el-button type="primary" size="medium" @click="diaAddEditShow">新增子账号</el-button>
    </div>
    <div class="content-table">
      <epoint-table :data="data" :showIndex="true" :showItem="false" :showSelection="false" :current-page="pagingConfig.page" :page-size="pagingConfig.size">
        <el-table-column width="90" label="登录账号">
          <template scope="scope">
            <span>baili001</span>
          </template>
        </el-table-column>
        <el-table-column width="240" label="账号名称">
          <template scope="scope">
            <span>隔壁老王家的店</span>
          </template>
        </el-table-column>
        <el-table-column label="角色">
          <template scope="scope">
            <span>系统管理员</span>
          </template>
        </el-table-column>
        <el-table-column width="200" label="创建时间">
          <template scope="scope">
            <span>2018/08/09 12:30:30</span>
          </template>
        </el-table-column>
        <el-table-column label="创建人">
          <template scope="scope">
            <span>隔壁老王家</span>
          </template>
        </el-table-column>
        <el-table-column width="40" fixed="right">
          <template scope="scope">
            <el-dropdown trigger="click" @command="handleCommand">
              <i class="el-icon-more more-rotate"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="edit">编辑</el-dropdown-item>
                <el-dropdown-item command="cancelAuth">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </epoint-table>
    </div>
    <epoint-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagingConfig.page" :page-size="pagingConfig.size" :total="pagingConfig.total">
    </epoint-pagination>
  </div>
</template>

<script>
import mock from '@/mock/qudao.json'
import { mapActions } from 'vuex'
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
      }
    }
  },
  props: {
  },
  components: {
  },
  mounted () {
    setTimeout(() => {
      this.getTableHeight()
    }, 500)
    this.getCommodityData()
    this.init()
  },
  computed: {

  },
  watch: {
  },
  methods: {
    ...mapActions([
      'getTableHeight'
    ]),
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
    toSKU () {
      console.log('kkk')
    },
    diaAddEditShow () {
      this.$emit('diaAddEditShow', 'add')
    },
    handleCommand (command) {
      if (command === 'edit') {
        this.$emit('diaAddEditShow', 'edit')
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '~assets/styles/variables';
.userManage {
  background: #fff;
  padding: 20px;
  padding-bottom: 0px;
  .i-header {
    color: #ccccd9;
    margin-left: 5px;
  }
  .more-rotate {
    transform: rotateZ(90deg);
  }
  .store-btns {
    box-sizing: border-box;
    // padding: 20px;
    padding-bottom: 20px;
  }
}
</style>

<style lang="less">
@import '~assets/styles/variables';
.userManage {
  .i-header {
    color: #ccccd9;
    margin-left: 5px;
  }
  .g-name {
    color: #5858f1;
  }
}
</style>
