import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    meta: {
      title: "首页",
      icon: "home",
      affix: true,
    },
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
  /* {
    path: "/test",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/index"),
        meta: {
          title: "test",
          icon: "marker",
          permissions: ["admin"],
        },
      },
    ],
  }, */
  {
    path: "/personnelManagement",
    component: Layout,
    redirect: "noRedirect",
    name: "PersonnelManagement",
    meta: { title: "人员", icon: "users-cog" },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () =>
          import("@/views/personnelManagement/userManagement/index"),
        meta: { title: "用户管理", permissions: ["admin"] },
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: () =>
          import("@/views/personnelManagement/roleManagement/index"),
        meta: { title: "角色管理", permissions: ["admin"] },
      },
    ],
  },
  {
    path: "/byui",
    component: Layout,
    redirect: "noRedirect",
    name: "Byui",
    meta: { title: "组件", icon: "cloud" },
    children: [
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "图标",
          permissions: ["admin"],
        },
        children: [
          {
            path: "awesomeIcon",
            name: "AwesomeIcon",
            component: () => import("@/views/byui/icon/index"),
            meta: { title: "常规图标" },
          },
          {
            path: "remixIcon",
            name: "RemixIcon",
            component: () => import("@/views/byui/icon/remixIcon"),
            meta: { title: "小清新图标" },
          },
          {
            path: "colorfulIcon",
            name: "ColorfulIcon",
            component: () => import("@/views/byui/icon/colorfulIcon"),
            meta: { title: "多彩图标" },
          },
        ],
      },
      {
        path: "table",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Table",
        meta: {
          title: "表格",
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () => import("@/views/byui/table/index"),
            meta: { title: "综合表格", permissions: ["admin"] },
          },
          {
            path: "inlineEditTable",
            name: "InlineEditTable",
            component: () => import("@/views/byui/table/inlineEditTable"),
            meta: { title: "行内编辑", permissions: ["admin"] },
          },
        ],
      },
      {
        path: "form",
        name: "Form",
        component: () => import("@/views/byui/form/index"),
        meta: { title: "表单", permissions: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: () => import("@/views/byui/element/index"),
        meta: { title: "常用组件", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/byui/tree/index"),
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "permission",
        name: "Permission",
        component: () => import("@/views/byui/permission/index"),
        meta: {
          title: "权限控制",
          permissions: ["admin", "editor"],
        },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: () => import("@/views/byui/waterfall/index"),
        meta: {
          title: "瀑布屏",
          noKeepAlive: true,
          permissions: ["admin"],
        },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: () => import("@/views/byui/echarts/index"),
        meta: { title: "图表", permissions: ["admin"] },
      },
      {
        path: "loading",
        name: "Loading",
        component: () => import("@/views/byui/loading/index"),
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "upload",
        name: "Upload",
        component: () => import("@/views/byui/upload/index"),
        meta: { title: "上传", permissions: ["admin"] },
      },
      {
        path: "excel",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Excel",
        meta: {
          title: "Excel",
          permissions: ["admin"],
        },
        children: [
          {
            path: "exportExcel",
            component: () => import("@/views/byui/excel/exportExcel"),
            name: "ExportExcel",
            meta: { title: "导出Excel" },
          },
          {
            path: "exportSelectedExcel",
            component: () => import("@/views/byui/excel/exportSelectExcel"),
            name: "ExportSelectedExcel",
            meta: { title: "导出选中行" },
          },
          {
            path: "exportMergeHeaderExcel",
            component: () =>
              import("@/views/byui/excel/exportMergeHeaderExcel"),
            name: "ExportMergeHeaderExcel",
            meta: { title: "导出合并" },
          },
          {
            path: "uploadExcel",
            component: () => import("@/views/byui/excel/uploadExcel"),
            name: "UploadExcel",
            meta: { title: "上传Excel" },
          },
        ],
      },
    ],
  },
  {
    path: "/mall",
    component: Layout,
    redirect: "noRedirect",
    name: "Mall",
    meta: {
      title: "商城",
      icon: "shopping-cart",
      permissions: ["admin"],
    },

    children: [
      {
        path: "pay",
        name: "Pay",
        component: () => import("@/views/mall/pay/index"),
        meta: {
          title: "支付",
          noKeepAlive: true,
        },
        children: null,
      },
      {
        path: "goodsList",
        name: "GoodsList",
        component: () => import("@/views/mall/goodsList/index"),
        meta: {
          title: "商品列表",
        },
      },
      {
        path: "goodsDetail",
        name: "GoodsDetail",
        component: () => import("@/views/mall/goodsDetail/index"),
        meta: {
          title: "商品详情",
        },
      },
    ],
  },
  {
    path: "/error",
    component: EmptyLayout,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    children: [
      {
        path: "/401",
        name: "401",
        component: () => import("@/views/401"),
        meta: { title: "401" },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/404"),
        meta: { title: "404" },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

export function resetRouter() {
  router.matcher = new VueRouter({
    mode: "hash",
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
