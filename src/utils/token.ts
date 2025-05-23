//封装本地存储数据与读取数据方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem("token", token);
};
//获取数据
export const GET_TOKEN = (): string | null => {
  return localStorage.getItem("token");
};
// 删除token
export const REMOVE_TOKEN = () => {
  localStorage.removeItem("token");
};
