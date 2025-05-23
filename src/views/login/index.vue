<template>
  <div class="container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <!-- 栅格系统一共24份，当小于一定限度，左侧不占，只占右侧 -->
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          @submit.prevent
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h2>Hello</h2>
          <h4>欢迎来到硅谷甄选</h4>
          <el-form-item prop="username">
            <el-input
              prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="form_btn"
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
//引入用户小仓库
import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
import { ElNotification } from "element-plus";
//引入时间
import { getTime } from "@/utils/time";
//获取表单组件
const loginForms = ref();
//获取路由器
const $router = useRouter();
const $route = useRoute();
const useStore = useUserStore();
//收集表单数据
const loginForm = reactive({ username: "admin", password: "111111" });
//表单校验规则
// required,代表这个字段必须要校验，trigger代表什么操作触发
//自定义校验规则函数
// rule,自定义的校验规则是数组的校验规则对象,value是表单元素的文本内容
//callback是校验后的回调函数，通过就调用函数，没通过就返回校验信息
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error("数字5-10位"));
  }
};

const rules = {
  username: [{ trigger: "change", validator: validatorUserName }],
  password: [
    {
      required: true,
      trigger: "change",
      min: 6,
      max: 16,
      message: "密码长度为6-16位",
    },
    {},
  ],
};

//validate对整个表单进行验证，接收一个回调函数或返回Promise

//登录按钮的回调
const login = async () => {
  //保证表单内容校验通过再发请求
  await loginForms.value.validate();
  //点击后pinia仓库发登录请求，成功跳转，不成功出不成功信息
  //调用仓库方法
  try {
    //保证登录成功，跳转界面
    await useStore.userLogin(loginForm);
    //判断登录时路由路径中是否有query参数,如果有按照参数重定向
    const redirect: any = $route.query.redirect;
    //跳转界面
    $router.push({ path: redirect || "/" });
    //登录成功提示信息
    ElNotification({
      type: "success",
      message: "登录成功",
      title: `Hi,${getTime()}`,
    });
  } catch (error) {
    //登录失败
    ElNotification({
      type: "error",
      message: "登录失败",
      title: `Hi,${getTime()}`,
    });
    $router.push("/404");
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
}

.login-form {
  position: relative;
  width: 60%;
  top: 50%;
  padding: 40px;
  margin: 0 15% 20% 15%;
  background: url("@/assets/images/login_form.png") no-repeat;
  background-size: cover;
}

h2 {
  color: white;
  font-size: 40px;
}

h4 {
  color: white;
  font-size: 20px;
}

.form_btn {
  position: relative;
  width: 50%;
  display: block;
  margin: 0 auto;
}
</style>
