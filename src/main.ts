import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//配置element国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus,
  {locale:zhCn},//国际化配置
)
//测试代码假接口
import axios from 'axios';
//登录接口
axios({
  url:'/api/user/login',
  method:"post",
  data:{
    username: 'admin',
    password: '111111',
  }
})





app.mount('#app')