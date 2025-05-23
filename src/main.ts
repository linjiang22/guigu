import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
//配置element国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "virtual:svg-icons-register";
import axios from "axios";
import router from "./router/index.ts";
//引入全局样式
import "@/styles/index.scss";
//引入仓库
import pinia from "./store/index.ts";
//引入全局组件
import globalComponent from "@/components/SvgIcon/index.ts";
const app = createApp(App);
app.use(
  ElementPlus,
  { locale: zhCn } //国际化配置
);
//测试代码假接口
//登录接口
// axios({
//   url:'/api/user/login',
//   method:"post",
//   data:{
//     username: 'admin',
//     password: '111111',
//   }
// })

//注册路由
app.use(router);
//使用pinia
app.use(pinia);
app.use(globalComponent);
//引入路由鉴权,这样至少执行一次
import "./permission";

app.mount("#app");
