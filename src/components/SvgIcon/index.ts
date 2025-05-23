//引入项目中的全局组件
import SvgIcon from "@/components/SvgIcon/index.vue";
//引入element提供的全部图标组件
import * as ElementPlusIconVue from "@element-plus/icons-vue";

//全局对象
const allGloablComponent: any = { SvgIcon };
// 对外暴露插件对象
export default {
  //必须叫install方法
  install(app: any) {
    //注册项目全局组件
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key]);
    });
    //将element提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconVue)) {
      app.component(key, component);
    }
  },
};
