<!-- 封装路由组件 -->
<template>
  <!-- 动效替换，路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
defineOptions({ name: "Main" });
import { watch, ref, nextTick } from "vue";
import useLayoutSettingStore from "@/store/setting";
const LayoutSettingStore = useLayoutSettingStore();
// 增加标记控制当前组件的销毁
//监听仓库中的变化，并且实现与tabbar中的通信
let flag = ref(true);
watch(
  () => LayoutSettingStore.refresh,
  () => {
    //点击刷新按钮路由组件需要销毁
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    });
  }
);
</script>
<style scoped>
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
