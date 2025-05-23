//对外暴露路由

import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";

//常量路由
export const constRoute = [
  {
    //登录路由
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: "登录", //菜单标题
      hidden: true,
      icon: "Promotion", //文字左侧图标
    },
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "home",
    meta: {
      title: "", //菜单标题
      hidden: false,
      icon: "HomeFilled",
    },
    redirect: "/home", //点击根路由直接重定向到首页
    // 二级组件
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页", //菜单标题
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    path: "/screen",
    component: () => import("@/views/screen/dataScreen.vue"),
    name: "screen", //命名路由
    meta: {
      title: "数据大屏",
      hidden: false,
      icon: "Histogram",
    },
  },
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "acl",
    meta: {
      title: "权限管理",
      hidden: false,
      icon: "Lock",
    },
    redirect: "/acl/role",
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/acl/user/user.vue"),
        name: "user",
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        component: () => import("@/views/acl/role/role.vue"),
        name: "role",
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "Stamp",
        },
      },
      {
        path: "/acl/permission",
        component: () => import("@/views/acl/permission/permission.vue"),
        name: "permission",
        meta: {
          title: "菜单管理",
          hidden: false,
          icon: "SetUp",
        },
      },
    ],
  },
  {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "product",
    meta: {
      title: "商品",
      hidden: false,
      icon: "Goods",
    },
    children: [
      {
        path: "/product/attr",
        component: () => import("@/views/product/attr/attr.vue"),
        name: "Attr",
        meta: {
          title: "属性管理",
          hidden: false,
          icon: "SetUp",
        },
      },
      {
        path: "/product/tradmark",
        component: () => import("@/views/product/trademark/trademark.vue"),
        name: "Tradmark",
        meta: {
          title: "品牌管理",
          hidden: false,
          icon: "ShoppingCart",
        },
      },
      {
        path: "/product/sku",
        component: () => import("@/views/product/sku/sku.vue"),
        name: "Sku",
        meta: {
          title: "sku管理",
          icon: "Flag",
          // hidden可以不写，为undefine,默认为false
        },
      },
      {
        path: "/product/spu",
        component: () => import("@/views/product/spu/spu.vue"),
        name: "Spu",
        meta: {
          title: "spu管理",
          icon: "CollectionTag",
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404", //菜单标题
      hidden: true,
      icon: "Warning",
    },
  },
  {
    //任意路由，上面的都没有访问到执行的路径
    path: "/:pathMatch(.*)*",
    //重定向
    redirect: "/404",
    name: "Any",
    meta: {
      title: "未知", //菜单标题
      hidden: true,
      icon: "Warning",
    },
  },
];
