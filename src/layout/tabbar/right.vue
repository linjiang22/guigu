<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    color="white"
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    color="white"
    @click="fullScreen"
  ></el-button>
  <el-button
    type="primary"
    size="small"
    icon="Setting"
    circle
    color="white"
  ></el-button>
  <!-- 刷新涉及通信，tabbar和main的通信 -->
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <!-- 下拉菜单退出登录 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username || "未登录" }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
//获取用户相关信息
import useUserStore from "@/store/modules/user";
defineOptions({ name: "Right" });
import { useRouter, useRoute } from "vue-router";
import useLayoutSettingStore from "@/store/setting";
import path from "path";
const LayoutSettingStore = useLayoutSettingStore();
let userStore = useUserStore();
console.log("userStore:", userStore.username, userStore.avatar);
//获取路由器对象
const $router = useRouter();
//获取路由对象
const $route = useRoute();
// 刷新按钮的回调
const updateRefresh = () => {
  LayoutSettingStore.refresh = !LayoutSettingStore.refresh;
};
const fullScreen = () => {
  // Dom对象的一个属性(全屏true,不是返回null)
  let full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    /// 退出全屏时加 try-catch，防止报错
    try {
      document.exitFullscreen();
    } catch (e) {
      // 可选：提示用户或忽略
      console.warn("退出全屏失败：", e);
    }
  }
};
//退出登录的业务
const logout = () => {
  //向服务器发退出登录的请求
  //仓库中关于用户的数据清除
  //跳转到登录界面
  userStore.userLogout();
  $router.push({ path: "/login", query: { redirect: $route.path } });
};
</script>

<style scoped lang="scss"></style>
