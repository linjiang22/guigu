<template>
  <!-- 左侧展开图标 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="margin: 0 3px 4px 0; vertical-align: middle">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
defineOptions({ name: "Breadcrumb" });
//获取路由对象
import { useRoute } from "vue-router";
import { ref } from "vue";
// 定义一个响应式数据控制图标切换
import useLayoutSettingStore from "@/store/setting";
let route = useRoute();
//获取相关配置仓库
const LayoutSettingStore = useLayoutSettingStore();
const changeIcon = () => {
  LayoutSettingStore.fold = !LayoutSettingStore.fold;
};
const handler = () => {
  console.log(route);
};
</script>

<style scoped lang="scss"></style>
