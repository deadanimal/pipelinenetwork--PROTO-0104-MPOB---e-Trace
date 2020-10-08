export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const USERPORTALROUTES: RouteInfo[] = [
  // {
  //   path: "/user-portal/dashboard",
  //   title: "Dashboard",
  //   type: "link",
  //   icontype: "fas fa-home text-default",
  // },
];
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/admin/mytask",
    title: "My Task",
    type: "link",
    icontype: "fas fa-tasks text-default",
  },
  {
    path: "/admin/e-klp",
    title: "e-KLP",
    type: "link",
    icontype: "fas fa-industry text-default",
  },
  {
    path: "/admin/e-penguatkuasaan",
    title: "e-Penguatkuasaan",
    type: "link",
    icontype: "fas fa-briefcase text-default",
  },
  {
    path: "/admin/e-aduan",
    title: "e-Aduan",
    type: "link",
    icontype: "fas fa-bullhorn text-default",
  },
  {
    path: "/admin/e-tindakan",
    title: "e-Tindakan",
    type: "sub",
    icontype: "fas fa-cog text-default",
    collapse: "e-gavel",
    isCollapsed: true,
    children: [
      { path: "e-kompaun", title: "e-Kompaun", type: "link" },
      { path: "e-rayuan", title: "e-Rayuan", type: "link" },
      { path: "e-amaran", title: "e-Amaran", type: "link" },
      { path: "e-mahkamah", title: "e-Mahkamah", type: "link" },
    ],
  },
  {
    path: "/admin/profil-pelesen",
    title: "Profil Pelesen",
    type: "link",
    icontype: "fas fa-id-card text-default",
  },
  {
    path: "/admin/track",
    title: "Track",
    type: "sub",
    icontype: "fas fa-truck text-default",
    collapse: "track",
    isCollapsed: true,
    children: [
      { path: "track-asset", title: "Track Asset/Lorry", type: "link" },
      { path: "track-report", title: "Report", type: "link" },
    ],
  },
  {
    path: "/admin/management",
    title: "System Management",
    type: "sub",
    icontype: "fas fa-cog text-default",
    collapse: "management",
    isCollapsed: true,
    children: [
      { path: "users", title: "Users", type: "link" },
      { path: "audit-trails", title: "Audit Trail", type: "link" },
    ],
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-default",
  },
  {
    path: "/user/update-profile-detail",
    title: "Register/Update Profile Detail",
    type: "link",
    icontype: "fas fa-user text-default",
  },
  {
    path: "/user/e-aduan",
    title: "e-Aduan",
    type: "link",
    icontype: "fas fa-bullhorn text-default",
  },
  {
    path: "/user/e-kompaun",
    title: "e-Kompaun",
    type: "link",
    icontype: "fas fa-archive text-default",
  },
  {
    path: "/user/e-notis",
    title: "e-Notis",
    type: "link",
    icontype: "fas fa-bell text-default",
  },
  {
    path: "/user/e-rekod",
    title: "e-Rekod",
    type: "link",
    icontype: "fas fa-file text-default",
  },
  {
    path: "/user/e-ffb",
    title: "e-FFB",
    type: "sub",
    icontype: "fas fa-building text-default",
    collapse: "e-ffb",
    isCollapsed: true,
    children: [
      { path: "e-ffb-dashboard", title: "Dashboard", type: "link" },
      { path: "e-ffb-transaction-purchase", title: "New Transaction/Purchase", type: "link" },
      { path: "e-ffb-delivery", title: "Delivery", type: "link" },
      { path: "e-ffb-directory", title: "Directory", type: "link" },
    ],
  },

];
