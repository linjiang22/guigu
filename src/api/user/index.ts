//管理用户相关的接口
import request from '@/utils/request.ts';
//导入类型规定
import type { loginForm, loginResponseDate, userResponseData } from './type.ts';
//统一管理接口
enum API{
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info"
}

//对外暴露请求函数
//登录接口方法
export const reqLogin = (data:loginForm): Promise<loginResponseDate> => {
  return request.post<any,loginResponseDate>(API.LOGIN_URL,data);
}
export const reqUserInfo = () => request.get<any,userResponseData>(API.USERINFO_URL);
//请求不需要带参
