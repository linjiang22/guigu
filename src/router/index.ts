//通过vue-router插件实现模板路由配置
import {createRouter,createWebHistory} from 'vue-router';
import { constRoute } from './router.ts';
//创建路由器
const router = createRouter({
  //路由模式HTMLhistory
  history:createWebHistory(),
  routes: constRoute,
  //滚动行为
  scrollBehavior(){
    return {
      left:0,
      top:0,
    }
  }
});

export default router;