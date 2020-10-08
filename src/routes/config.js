// export interface IFMenuBase {
//   key: string;
//   title: string;
//   icon?: string;
//   component?: string;
// }

// export interface IFMenu extends IFMenuBase {
//   subs?: IFMenu[];
// }

// const menus: {
//   menus: IFMenu[];
//   others: IFMenu[] | [];
// } = {
//   menus: [
//     //菜单相关路由
//     {
//       key: "/app/dashboard/index",
//       title: "首页",
//       icon: "mobile",
//       component: "Dashboard",
//     },
//     {
//       key: "/app/table",
//       title: "表格",
//       icon: "scan",
//       subs: [
//         {
//           key: "/app/table/simple",
//           title: "简单表格",
//           icon: "mobile",
//           component: "SimpleTable",
//         },
//         {
//           key: "/app/table/jsx",
//           title: "JSX表格",
//           icon: "mobile",
//           component: "JsxTable",
//         },
//       ],
//     },
//   ],
//   others: [], //非菜单相关路由
// };

// export default menus;
const menus = [
  {
    key: "/app/dashboard/index",
    title: "首页",
    icon: "mobile",
    component: "Dashboard",
  },
  {
    key: "/app/authority/index",
    title: "权限管理",
    icon: "mobile",
    component: "Authority",
  },
  {
    key: "/app/table",
    title: "表格",
    icon: "scan",
    subs: [
      {
        key: "/app/table/simple",
        title: "简单表格",
        icon: "mobile",
        component: "SimpleTable",
      },
      {
        key: "/app/table/jsx",
        title: "JSX表格",
        icon: "mobile",
        component: "JsxTable",
      },
    ],
  },
  {
    key: "/app/form",
    title: "表单",
    icon: "scan",
    subs: [
      {
        key: "/app/form/simple",
        title: "简单表单",
        icon: "mobile",
        component: "SimpleTable",
      },
      {
        key: "/app/form/jsx",
        title: "复杂表单",
        icon: "mobile",
        component: "JsxTable",
      },
    ],
  },
];

export default menus;

