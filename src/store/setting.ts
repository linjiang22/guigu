// 用于layout孙组件往上传递状态的一个仓库
import { Refresh } from "@element-plus/icons-vue/dist/types/components/index.js";
import { defineStore } from "pinia";

const useLayoutSettingStore = defineStore("SettingStore", {
  state: () => {
    return {
      fold: false, //用于控制菜单折叠和收起
      //变量存储进仓库后所有的变量都可以使用
      refresh: false, //用于控制刷新的
    };
  },
});

export default useLayoutSettingStore;
