<template>
  <div class="container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <!-- 栅格系统一共24份，当小于一定限度，左侧不占，只占右侧 -->
      <el-col :span="12" :xs="24">
        <el-form class="login-form" @submit.prevent
          :model="loginForm"
          :rules="rules"
        >
          <h2>Hello</h2>
          <h4>欢迎来到硅谷甄选</h4>
          <el-form-item prop="userName">
            <el-input :prefix-icon="User" v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" show-password v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="default" class="form_btn" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { User,Lock} from '@element-plus/icons-vue'
import { reactive } from 'vue';
//引入用户小仓库
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
//引入时间
import {getTime} from '@/utils/time'
//获取路由器
const $router = useRouter()
const useStore = useUserStore();
//收集表单数据
const loginForm = reactive({userName:'admin',password:'111111'})
//表单校验规则
const rules = {
  userName:[{required:true,message:'用户名不能为空',trigger:'change'},{
    require:true,min:5,max:10,trigger:'change'}],
  password:[{required:true,trigger:'change',min:6,max:16,message:'密码长度为6-16位'}]
}
//登录的回调
 const login = async() => {
  //点击后pinia仓库发登录请求，成功跳转，不成功出不成功信息
  //调用仓库方法
  // console.log('login clicked')有打印
  try{//保证登录成功，跳转界面
     await useStore.userLogin(loginForm);
     //跳转界面
     $router.push('/')
     //登录成功提示信息
     ElNotification({
      type:'success',
      message:'登录成功',
      title:`Hi,${getTime()}`
     })
  } catch(error) {
    //登录失败
    ElNotification({
      type:'error',
      message:'登录失败',
      title:`Hi,${getTime()}`
    })
    $router.push('/')
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login-form {
  position: relative;
  width: 60%;
  top: 50%;
  padding: 40px;
  margin: 0 15% 20% 15%;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover
}

h2 {
  color: white;
  font-size: 40px;
}

h4 {
  color: white;
  font-size: 20px;
}
.form_btn{
  position: relative;
  width: 50%;
  display: block;
  margin: 0 auto;
}
</style>