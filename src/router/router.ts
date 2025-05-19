//对外暴露路由
//常量路由
export const constRoute = [
  {//登录路由
      path:'/login',
      component:()=>import('@/views/login/index.vue'),
      name:'login',//命名路由
    },
    {
      path:'/',
      component:() => import('@/views/home/index.vue'),
      name:'home',
    },
    {
      path:'/404',
      component: () => import('@/views/404/index.vue'),
      name:'404',
    },
    {
      //任意路由，上面的都没有访问到执行的路径
      path:'/:pathMatch(.*)*',
      //重定向
      redirect:'/404',
      name:'Any'
    }
]