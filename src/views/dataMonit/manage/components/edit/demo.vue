<template>
    <div class="demo">
        <h1>{{ title }}</h1>
        <div v-for="(item, index) in list" :key="index">
            <p class="name">{{ item.Name }}</p>
            <p>{{ item.Age }}</p>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
.demo {
  .name {
    font-size: 30px;
  }
}
</style>

<script type="text/babel">
import demo from "./demo";
export default {
  ...demo
};
</script>
