# 介绍

项目基于 VUE-ADMIN-Beautiful 简化，减少生成后的文件体积，链接：https://github.com/chuzhixin/vue-admin-beautiful

## 项目结构

- config 配置
- directive VUE 修饰指令
- layouts 布局，默认后台布局、空布局
- plugins 插件
- components 组件

- router 路由、菜单
- store 会话
- api API 接口，已增加拦截
- views 视图，其中 index 为默认后台首页，login 为登录页，redirect 用于跳转，401、404 为错误页，其它为示例

## 安装

```bash
# 安装依赖
npm i
# 本地开发 启动项目
npm run serve
```

## 快速生成代码

npm run template 可以生成模板，包括 view, crud, vuex, componet, api。

## 常用命令

- npm run serve 开发，自动热加载
- npm run build 发布，文件在 dist 目录

# 配置项

- 环境变量配置：.env.development，.env.production，.env.test。其中 VUE_APP_BASE_API 为请求后端 URL
- src/config/settings.js 配置系统参数，需要调整 tokenName，tokenTableName， successCode， invalidCode 等
- 权限默认由前端控制，后端返回 permission = ['admin','editor'] 定义用户角色，前端菜单对应指定 permissions，定义在 src/router/index.js
- 权限由后端控制，需调整 src/config/setting.js 的 authentication = all，后端通过接口返回用户菜单

## 菜单定义

```js
//当设置 true 的时候该路由不会再侧边栏出现
hidden: true; // (默认 false)
//当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
redirect: "noRedirect";
//是否显示根节点
alwaysShow: true;
//设定路由的名字，首字母大写，一定要填写不然使用<keep-alive>时会出现各种问题
name: "Test";
meta: {
  //设置该路由进入的权限，支持多个权限叠加
  permissions: ["admin", "editor", "test"];
  //设置该路由在侧边栏和面包屑中展示的名字
  title: "title";
  //设置该路由的图标,在常规图标中拷贝即可
  icon: "";
  //设置该路由的图标,在小清新图标中拷贝即可，但小清新图标的svg默认未集成到项目需要手动下载并拷贝到根目remixIcon/svg文件夹下
  remixIcon: "";
  //如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  noKeepAlive: true;
  breadcrumb: false; // 如果设置为false，则不会在breadcrumb面包屑中显示
}
```

## 按钮级权限

思路：获取用户信息时获取 permissions，存到 store 里面，然后页面根据权限进行按钮级控制，具体看下 permission 组件中有示例
代码示例：

```vue
<template>
  <div class="demo-container">
    <el-button v-if="checkPermission(['admin'])" type="primary"
      >按钮级权限
    </el-button>
  </div>
</template>

<script>
import checkPermission from "@/utils/permission";

export default {
  name: "Demo",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    checkPermission,
  },
};
</script>
<style lang="scss" scoped></style>
```
