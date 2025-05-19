<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script setup lang="ts">
import SvgIcon from './components/SvgIcon/index.vue'
import { ref } from 'vue'
import router from './router'
const iconName = ref('vue')
console.log(iconName.value) // 确保输出 'vue'
import { onMounted } from 'vue';
// import { reqLogin } from './api/user'
// onMounted(() => {
//   reqLogin({userName:'111',password:'123456'})
// })测试api接口

</script>

<style scoped></style>
