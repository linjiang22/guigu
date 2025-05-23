<!-- 上部导航栏设置 -->
<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb />
    </div>
    <div class="tabbar-right">
      <Right />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "Tabbar" });
import Breadcrumb from "./breadcrumb.vue";
import Right from "./right.vue";
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, white, rgb(175, 216, 239));

  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  .tabbar-right {
    display: flex;
    align-items: center;
  }
}
img {
  margin-left: 0 10px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
</style>
