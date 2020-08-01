// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Home from '@material-ui/icons/Home';
import Book from '@material-ui/icons/Book';
import User from '@material-ui/icons/PersonAddRounded';
import About from '@material-ui/icons/QuestionAnswer';
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import TableList from "./views/TableList/TableList.js";
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Notifications/Notifications.js";
import UpgradeToPro from "./views/UpgradeToPro/UpgradeToPro.js";
// core components/ views for giftRed layout
import Mainpage from './views/Mainpage/Mainpage';
import Directorio from './views/Directorio/Directorio';
import SigninContainer from './containers/SigninContainer/SigninContainer';
import SobreContainer from './containers/SobreContainer/SobreContainer';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
  {
    path: "/home",
    name: "Principal",
    icon: Home,
    component: Mainpage,
    layout: "/main"
  },
  {
    path: "/directorio",
    name: "Directorio",
    icon: Book,
    component: Directorio,
    layout: "/main"
  },
  {
    path: "/signup",
    name: "Ingresar",
    icon: User,
    component: SigninContainer,
    layout: "/main"
  },
  {
    path: "/about",
    name: "Sobre Nosotros",
    icon: Home,
    component: SobreContainer,
    layout: "/main"
  },
];

export default dashboardRoutes;
