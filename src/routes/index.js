// export interface IFMenuBase {
//   key: string;
//   title: string;
//   icon?: string;
//   component?: string;
//   query?: string;
//   requireAuth?: string;
//   route?: string;
//   login?: boolean;
// }

// export interface IFMenu extends IFMenuBase {
//   subs?: IFMenu[];
// }
const menus = [
  {
    key: "/app/dashboard/index",
    title: "首页",
    icon: "mobile",
    component: "Dashboard",
  },
  {
    key: "/app/user",
    title: "用户中心",
    icon: "scan",
    subs: [
      { key: "/app/user/buttons", title: "按钮", component: "Buttons" },
      { key: "/app/user/icons", title: "图标", component: "Icons" },
      { key: "/app/user/spins", title: "加载中", component: "Spins" },
    ],
  },
];

export default menus;
