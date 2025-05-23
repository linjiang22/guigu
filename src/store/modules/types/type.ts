//定义仓库数据state类型
import type { RouteRecordRaw } from "vue-router";
// 路由对象的ts类型
export interface UserState {
  token: string | null;
  menuRoutes: RouteRecordRaw[];
  username: String;
  avatar: string;
}
