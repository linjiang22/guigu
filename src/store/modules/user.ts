//用户小仓库
import { defineStore } from "pinia";
//引入接口
import { reqLogin, reqUserInfo } from "@/api/user/index.ts";
//引入类型
import type { loginForm, loginResponseDate } from "@/api/user/type.ts";
//引入state类型
import type { UserState } from "./types/type.ts";
//引入常量路由
import { constRoute } from "@/router/router.ts";
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token.ts";
let useUserStore = defineStore("user", {
  //小仓库存储数据的地方（这里是选项式不是组合式，可以改为组合式）
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户的唯一标识
      menuRoutes: constRoute,
      username: "",
      avatar: "",
    };
  },
  //异步|逻辑的地方
  actions: {
    //用户登录方法,异步请求
    async userLogin(data: loginForm) {
      // 1. 打印请求数据
      console.log("Login request data:", data);
      const result: loginResponseDate = await reqLogin(data);
      if (result.code === 200) {
        //通过pinia仓库存储token
        this.token = result.data.token as string;
        //本地存储
        SET_TOKEN(result.data.token as string);
        console.log("token set:", this.token);
        return "ok";
        //保证async函数返回一个成功的promise
      } else {
        console.log("login failed:", result); // 打印失败信息
        return Promise.reject(new Error(result.data.message));
      }
    },
    //获取用户信息方法
    async userInfo() {
      //获取用户信息
      let result = await reqUserInfo();
      console.log("用户信息:", result);
      if (result.code === 200) {
        this.username = result.data.checkUser.username;
        this.avatar = result.data.checkUser.avatar;
        //如果获取用户信息成功则返回成功的信息
        return "ok";
      } else {
        return Promise.reject("获取用户信息失败");
      }
    },
    async userLogout() {
      //目前没有mock接口做退出接口，通知服务器用户唯一标识失效
      this.token = "";
      this.username = "";
      this.avatar = "";
      REMOVE_TOKEN();
    },
  },
  //getter方法
  getters: {},
});
//对外暴露小仓库的方法
export default useUserStore;
