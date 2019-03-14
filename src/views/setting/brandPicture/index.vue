<template>
  <div class="brandPicture">
    <epoint-card class="search-pic">
      <el-input placeholder="请输入图片名称" v-model="searchPicName" clearable class="wid286">
      </el-input>
      <el-button class="pic-seach-btn" type="primary" size="medium">搜索</el-button>
    </epoint-card>
    <div class="pic-box">
      <el-card class="pic-card pic-card-add">
        <el-upload class="picUpload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-upload="beforeUpload" list-type="picture-card" :show-file-list="false">
          <div class="up-inner-div">
            <p><i class="el-icon-circle-plus-outline"></i></p>
            <p>新增图片</p>
          </div>
        </el-upload>
      </el-card>
      <el-card class="pic-card" v-for="item in picList" v-bind:key="item.id">
        <img :src="item.imgUrl" class="pic">
        <p class="pic-opa">
          <el-input size="mini" v-model="item.imgName" placeholder="请输入图片名称" v-if="item.edit" class="wid156" @blur="savePicName(item)"></el-input>
          <span v-else><span class="pic-name">{{item.imgName}}</span><i class="el-icon-edit" @click="picEdit(item)"></i></span><span class="pic-del">删除</span>
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
import index from './index'
export default index
</script>

<style lang="less" rel="stylesheet/less" >
@import '~assets/styles/variables';
.brandPicture {
  .wid286 {
    width: 286px;
  }
  .search-pic {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 12px 20px;
    .pic-seach-btn {
      border-radius: 0px 4px 4px 0px;
    }
    .el-input__inner {
      border-radius: 4px 0px 0px 4px;
    }
  }
  .pic-box {
    display: flex;
    flex-wrap: wrap;
    .pic-card {
      width: 228px;
      height: 273px;
      margin: 0px 20px 20px 0px;
      .el-card__body {
        padding: 0;
      }
      .pic {
        width: 100%;
        height: 228px;
      }
      .pic-opa {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0px 10px;
        height: 40px;
        font-size: 12px;
        .wid156 {
          width: 156px;
        }
        .pic-del {
          color: #8f97b0;
          cursor: pointer;
        }
        .el-icon-edit {
          cursor: pointer;
          color: #ccccd9;
          margin-left: 6px;
        }
      }
    }
    .pic-card-add {
      background: #f9f9fb;
      box-sizing: border-box;
      padding: 10px;
      .el-card__body {
        width: 100%;
        height: 100%;
      }
      .picUpload {
        width: 100%;
        height: 100%;
        .el-upload {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          line-height: normal;
          .up-inner-div {
            .el-icon-circle-plus-outline {
              color: #c1c5d4;
              font-size: 36px;
              margin-bottom: 10px;
            }
            color: #e1e5ee;
            width: 100%;
            text-align: center;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
