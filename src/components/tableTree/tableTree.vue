<template>
  <div class="tableTree">
    <div class="tab-tree-th tab-tree-item" ref="tree">
      <div class="t-tree-box">
        <el-tree v-if="watchDateArr[0].arr.length>0" :data="watchDateArr" node-key="id" :expand-on-click-node="false" :render-content="hrenderContent" :indent="10">
        </el-tree>
        <span class="no-brand" v-else>先选择您要对比的时间段和品牌名称，点击对比后表格内将显示对比信息</span>
      </div>
    </div>
    <div ref="treeBox">
      <div class="tab-tree-item" v-for="(item,key) in data4">
        <div :class="['left-ban',key%2==0?'banbgf':'banbgg']"><span>交 易 信 息</span></div>
        <div class="t-tree-box">
          <el-tree :data="item" node-key="id" :expand-on-click-node="false" :render-content="renderContent" :indent="10">
          </el-tree>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
// let id = 1000
export default {
  name: 'tableTree',
  props: {

  },
  data () {
    const data = [{
      id: 1,
      label: '一级 1',
      arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05'],
      children: [{
        id: 4,
        label: '二级 1-1',
        arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05'],
        children: [{
          id: 9,
          label: '三级 1-1-1',
          arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05']
        }, {
          id: 10,
          label: '三级 1-1-2',
          arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05']
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05'],
      children: [{
        id: 5,
        label: '二级 2-1',
        arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05']
      }, {
        id: 6,
        label: '二级 2-2',
        arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05']
      }]
    }, {
      id: 3,
      label: '一级 3',
      arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05'],
      children: [{
        id: 7,
        label: '二级 3-1',
        arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05']
      }, {
        id: 8,
        label: '二级 3-2',
        arr: ['2018.01.01', '2018.01.02', '2018.01.03', '2018.01.04', '2018.01.05']
      }]
    }]
    return {
      data4: [data, JSON.parse(JSON.stringify(data))],
      watchDateArr: [{
        id: '0',
        label: '',
        arr: [],
        // arr: ['品牌A', '品牌B', '品牌C', '品牌D', '品牌E'],
        children: []
      }],
      spanstyle: {},
      treeWidth: 0
    }
  },
  computed: {
    // calcWidth () {
    //   let spanwd = (75 / this.watchDateArr.length) + '%'
    //   this.spanstyle = {
    //     right: spanwd
    //   }
    //   return this.spanstyle
    // }
  },
  watch: {
    treeWidth () {
      this.getTreeItems()
    }
  },
  methods: {
    hrenderContent (h, { node, data, store }) {
      let len = data.arr.length
      return (
        <div class="custom-tree-node">
          <span>{data.label}</span>
          <span class="nums">
            {(() => {
              return data.arr.map((item, key) => {
                return (
                  <span style={{ right: (len - (key + 1)) * 24 + '%' }} class={'num-' + key}>{item}</span>
                )
              })
            })()}
          </span>
        </div >)
    },
    renderContent (h, { node, data, store }) {
      let len = data.arr.length
      return (
        <div class="custom-tree-node">
          <span class="tree-label">{data.label}</span>
          <span class="nums">
            {(() => {
              return data.arr.map((item, key) => {
                return (
                  <span style={{ right: (len - (key + 1)) * 24 + '%' }} class={'num-' + key}>{item}</span>
                )
              })
            })()}
          </span>
        </div >)
    },
    getTreeItems () {
      let arr = []
      let elTreeArr = this.$refs.treeBox.querySelectorAll('.el-tree')
      let len = elTreeArr.length
      for (let k = 0; k < len; k++) {
        let len = elTreeArr[k].children.length
        for (let i = 0; i < len; i++) {
          if (elTreeArr[k].children[i].className !== 'el-tree__drop-indicator') {
            arr.push(elTreeArr[k].children[i])
          }
        }
      }
      // this.$refs.treeBox.querySelectorAll('.el-tree').forEach(ele => {
      //   let len = ele.children.length
      //   for (let i = 0; i < len; i++) {
      //     if (ele.children[i].className !== 'el-tree__drop-indicator') {
      //       arr.push(ele.children[i])
      //     }
      //   }
      // })
      arr.forEach((item, idx) => {
        // item.classList.add('bor')
        item.style.borderBottom = '1px solid #e4e7ef'
        if (idx % 2 === 0) {
          item.style.background = '#f7f9fb'
          // item.classList.add('bgg')
        }
      })
    }
  },
  mounted () {
    this.treeWidth = this.$refs.tree.offsetWidth - 300
  },
  render (h) { }
}
</script>
<style lang="less" >
.tableTree {
  .tab-tree-th {
    background: #f5f8fa;
    display: flex;
    align-content: center;
    // justify-content: flex-end;
    color: #9098b1;
    box-sizing: border-box;
    padding-left: 40px;
    p {
      text-align: right;
      padding-right: 80px;
      box-sizing: border-box;
    }
    span {
      display: flex;
      align-items: center;
    }
    .el-tree {
      background: transparent !important;
    }
  }
  .tab-tree-item {
    display: flex;
    .left-ban {
      width: 40px;
      padding: 0 13px;
      box-sizing: border-box;
      letter-spacing: 5px;
      text-align: center;
      display: flex;
      align-items: center;
    }
    .banbgf {
      background: #e1e5ee;
      color: #9098b1;
    }
    .banbgg {
      background: #8f97b0;
      color: #fff;
    }
    .t-tree-box {
      // width: 100%;
      width: calc(~'100% - 40px');
      .el-tree-node__content {
        position: relative;
      }
      .custom-tree-node {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .tree-label {
          // position: absolute;
        }
        .nums {
          width: 75%;
          text-align: right;
          position: absolute;
          right: 0px;
          display: flex;
          align-items: center;
          top: 0px;
          height: 100%;
          & > span {
            // position: absolute;
            width: 20%;
            display: inline-block;
            text-align: center;
            transform: translateX(-100px);
          }
          // .num-3 {
          //   right: 60px;
          // }
          // .num-2 {
          //   right: 120px;
          // }
          // .num-1 {
          //   right: 180px;
          // }
        }
      }
      .bor {
        // background: #f7f9fb;
        border-bottom: 1px solid #e4e7ef;
      }
      .el-tree-node__content {
        padding: 12px 0px;
      }
      // .el-tree-node__content:hover {
      //   background-color: transparent;
      // }
      // .el-tree-node__content:focus {
      //   background-color: transparent;
      // }
      .el-icon-caret-right:before {
        content: '+';
        // color: #657886;
        // display: inline-block;
        width: 22px;
        font-weight: 600;
        font-size: 18px;
      }
      .el-tree-node__expand-icon.expanded {
        transform: rotate(0deg);
      }
      .el-tree-node__expand-icon.expanded:before {
        transform: rotate(0deg);
        content: '-';
      }
      .no-brand {
        font-size: 14px;
        box-sizing: border-box;
        padding: 12px;
      }
    }
  }
}
</style>
