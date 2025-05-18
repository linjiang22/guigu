<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <el-button type="danger">删除</el-button>
    <el-pagination layout="prev, pager, next, jumper" :total="1000" />
  </div>
  <SvgIcon name="vue"></SvgIcon>
</template>

<script setup lang="ts">
import SvgIcon from './components/SvgIcon/index.vue'
import { ref } from 'vue'
const iconName = ref('vue')
console.log(iconName.value) // 确保输出 'vue'
</script>

<style scoped></style>
