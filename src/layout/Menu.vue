<template>
  <!-- <p>{{ menuList }}</p> -->
  <el-menu v-if="menuList && menuList.length">
    <template v-for="(item, index) in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item
          v-if="!item.meta.hidden"
          :index="item.path"
          @click="goRoute"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有一个子路由 -->
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item
          :index="item.children[0].path"
          v-if="!item.children[0].meta.hidden"
          @click="goRoute"
        >
          <el-icon v-if="item.children[0].meta.icon">
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>

      <!-- 有多个子路由 -->
      <el-sub-menu
        v-if="item.children && item.children.length > 1"
        :index="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 递归 递归组件必须有名字 -->
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
//跳转方法
import { useRoute, useRouter } from "vue-router";
////接收父组件传过来的路由仓库
defineProps(["menuList"]);
defineOptions({ name: "Menu" });
// 获取路由器对象
let router = useRouter();
const goRoute = (vc: any) => {
  // console.log(router);
  // 路由跳转
  router.push(vc.index);
};
</script>
<script lang="ts"></script>
<style scoped lang="scss">
:deep(.el-menu) {
  //：deep 忽略scoped的影响
  .el-menu-item {
    padding-left: 0px !important;
    .el-sub-menu & {
      padding-left: 30px !important;
    }
  }
}
</style>
