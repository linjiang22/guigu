<template>
<svg style="height: 50px;">
    <!-- xlink:href属性执行用哪个图标 -->
    <use :href="prefix+`book`"></use>
  </svg>
</template>

<script lang="ts" setup>

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