<!-- layout主页组件 -->
<template>
  <div class="entire_page">
    <div
      class="layout_slider"
      :class="{ fold: LayoutSettingStore.fold ? true : false }"
    >
      <!-- 加一个动态的类 -->
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="#223355"
          text-color="#ffffff"
          active-text-color="#ffd04b"
          router
          :default-active="route.path"
          :collapse="LayoutSettingStore.fold ? true : false"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div
      class="layout_topbar"
      :class="{ fold: LayoutSettingStore.fold ? true : false }"
    >
      <Tabbar></Tabbar>
    </div>
    <!-- 内容 -->
    <div
      class="layout_main"
      :class="{ fold: LayoutSettingStore.fold ? true : false }"
    >
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "Layout" });
//获取路由对象
import { useRoute } from "vue-router";
import Logo from "@/layout/Logo.vue";
import Menu from "./Menu.vue";
//将右侧内容区封装成组件引入
import Main from "./main.vue";
//引入tabbar
import Tabbar from "./tabbar/tabbar.vue";
//获取用户相关小仓库
import useUserStore from "@/store/modules/user";
//获取关于layout折叠的小仓库
import useLayoutSettingStore from "@/store/setting";
let userStore = useUserStore();
//获取路由对象
let route = useRoute();
//配置layout仓库
const LayoutSettingStore = useLayoutSettingStore();
</script>

<style scoped lang="scss">
.entire_page {
  display: flex;
  width: 100%;
  height: 100dvh;
}
.layout_slider {
  position: fixed;
  top: 0;
  left: 0;
  width: $base_slider_width;
  height: 100dvh;
  background-color: #223355;
  border: 1px inset #919191;
  transition: all 0.3s;
  &.fold {
    width: $base-menu-min-width;
  }
  // 自定义滚动条样式
  .scrollbar {
    width: 104%;
    height: calc(100vh - 70px);
    margin-left: -5px;
    transition: all 0.3s;
  }
}
.layout_topbar {
  width: calc(100% - $base_slider_width);
  height: $base_topbar;
  border: 1px inset #919191;
  position: fixed;
  // 固定定位
  top: 0px;
  left: $base_slider_width;
  transition: all 0.3s;
  &.fold {
    width: calc(100vw - $base-menu-min-width);
    left: $base-menu-min-width;
  }
}
.layout_main {
  position: fixed;
  width: calc(100% - $base_slider_width);
  height: calc(100vh - $base_topbar);
  left: $base_slider_width;
  top: $base_topbar;
  overflow: auto;
  padding: 10px;
  transition: all 0.3s;
  &.fold {
    width: calc(100% - $base-menu-min-width);
    left: $base-menu-min-width;
  }
}
</style>
