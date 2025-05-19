//用户小仓库
import { defineStore } from "pinia";
//引入接口
import { reqLogin } from "@/api/user/index.ts";
//引入类型
import type { loginForm,loginResponseDate } from "@/api/user/type.ts";
//引入state类型
import type { UserState } from "./types/type.ts";

let useUserStore = defineStore('user',{
  //小仓库存储数据的地方（这里是选项式不是组合式，可以改为组合式）
  state:():UserState => {
    return {
      token:localStorage.getItem('token'),//用户的唯一标识
    }
  },
  //异步|逻辑的地方
  actions:{
    //用户登录方法,异步请求
    async userLogin(data:loginForm){
     const result:loginResponseDate = await reqLogin(data);
     console.log('login token');
     if(result.code === 200){
      //通过pinia仓库存储token
      this.token =(result.data.token as string);
      //本地存储
      localStorage.setItem('token',(result.data.token as string))
      console.log('token set:', this.token); 
      return 'ok';
      //保证async函数返回一个成功的promise
     }else {
      console.log('login failed:', result); // 打印失败信息
      return Promise.reject(new Error(result.data.message))
     }
    }
  },
  //getter方法
  getters:{

  }
});
//对外暴露小仓库的方法
export default useUserStore;