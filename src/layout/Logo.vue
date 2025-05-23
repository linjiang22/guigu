<template>
  <div>
    <img :src="setting.logo" alt="" />
    <!-- 绑定变量src需要用:src -->
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "Logo" });
//引入logo和title设置
import setting from "@/setting.ts";
</script>
<style scoped lang="scss">
img {
  margin: 10px 0 0 10px;
  width: 20px;
  height: 20px;
}
p {
  width: 80px;
  margin-left: 30px;
  margin-top: -15px;
  color: #fff; // 设置为白色
}
</style>
