<template>
<svg style="height: 50px;">
    <!-- xlink:href属性执行用哪个图标 -->
    <use :href="prefix+`book`"></use>
  </svg>
</template>

<script lang="ts" setup>
// 导入工具库
import { ref, onMounted, onUnmounted } from 'vue'
// 导入组件库
// 定义属性
// 定义方法
// 生命周期
onMounted(() => {
})

onUnmounted(() => {
})

defineProps({
  //xlink:href属性值前缀
  prefix:{
    type:String,
    default:'#icon-'
  },
  //提供使用图标的名字
  name:String,
  color:{
    type:String,
    default:''
  },
})//接收父组件传递过来的参数
</script>

<style scoped>

</style>