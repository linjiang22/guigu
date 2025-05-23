//路由鉴权，项目中的路由什么情况下能访问
import router from "@/router";
import setting from "./setting.ts";
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
nprogress.configure({ showSpinner: false });
//获取用户相关小仓库中的token数据，用于给其他路由判断用户是否登录
import useUserStore from "./store/modules/user.ts";
import pinia from "./store/index.ts";
const userStore = useUserStore(pinia);
console.log("大仓库中的用户小仓库", userStore);

//全局守卫：项目中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `${setting.title}-${to.meta.title}`;
  //访问某路由前会执行的函数
  //to代表将要访问哪个路由，from：从哪个路由来，next:路由的放行函数
  nprogress.start();
  // 获取token判断用户是否登录成功
  const token = userStore.token;
  const username = userStore.username;
  if (token) {
    // 已登录，不允许再进login
    if (to.path === "/login") {
      next({ path: "/" }); // 或 next({ path: "/home" });
    } else {
      //登录成功访问其余的路由都放行
      //有用户信息
      if (username) {
        //放行
        next();
      } else {
        //在守卫这里发请求获取到用户信息再放行
        try {
          await userStore.userInfo();
          next();
        } catch (error) {
          //没有用户信息，发请求仍未拿到
          //token过期或用户手动修改了本地存储token
          //先退出登录--用户相关信息清空
          userStore.userLogout();
          alert("即将重新登录");
          next({ path: "/login", query: { redirect: to.path } });
        }
      }
    }
  } else {
    //用户未登录的判断
    if (to.path == "/login") {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.path } });
    }
  }
});

//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done();
});

//第一个问题，任意的路由的切换实现进度条业务 nprogress
//问题二：路由组件访问权限的问题
//全部组件：login/404/any/数据大屏  二级：home权限管理3/商品管理4
//用户未登录可以访问login,其余的都不能访问，都指向login
// 登录成功后不可以再访问login,其余的路由可以访问
