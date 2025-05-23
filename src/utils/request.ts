//进行axios的二次封装，使用请求和响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
//引入用户相关仓库
import useUserStore from "@/store/modules/user.ts";
//利用它的create方法，创建实例，可以配基础路径，请求时间等
const request = axios.create({
  //配置请求基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000, //发请求的超时时间
}); //有返回值，所以要接收

//给axios实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //返回配置对象，config配置对象含有headers请求头，给服务器端携带公共参数
  //获取用户相关小仓库
  let userStore = useUserStore();
  console.log("axios", userStore.token);
  if (userStore.token) {
    config.headers.token = userStore.token;
  }
  return config;
});

//响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功的回调
    return response.data;
  },
  (error) => {
    //失败的回调：处理http网络错误
    //定义一个变量存储网络返回的错误信息
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
    }
    ElMessage.error({
      type: "error",
      message,
    });
    return Promise.reject(error);
  }
);
export default request;
