// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
// import TableList from "views/TableList/TableList.js";
import ElectronicCards from "views/ElectronicCards/ElectronicCards.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/panel-empresarial",
    name: "Panel Empresarial",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Perfil de Usuario",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  // },
  {
    path: "/gift-cards",
    name: "Gift-Cards Electronicas",
    icon: CardGiftcardIcon,
    component: ElectronicCards,
    layout: "/admin",
  },
  {
    path: "/notificaciones",
    name: "Notificaciones",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
