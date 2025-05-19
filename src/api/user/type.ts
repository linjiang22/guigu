//定义参数数据类型
export interface loginForm{
  userName:string,
  password:string,
}

interface dataType{
  token?:string,
  message?:string
}
//登录成功返回的数据类型
export interface loginResponseDate{
  code:number,
  data:dataType,
}

interface userInfo{
  userId: number,
  avatar:string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string,
}
interface user{
  checkUser:userInfo,
}
//服务器返回用户信息的数据类型
export interface userResponseData{
  code:number,
  data:user,
}