// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/Auth/SignIn";
import SignUp from "views/Pages/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import StudentIndex from "views/Pages/sudent/StudentIndex";
import TeachersIndex from "views/Pages/teachers/TeachersIndex";
import parentIndex from "views/Pages/parent/parentIndex";
import Messageindex from "views/Pages/message/messageIndex";
import Feedbackindex from "views/Pages/feedback/FeedbackIndex";
import Manageindex from "views/Pages/Users/ManageIndex";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/student",
    name: "Student Details",
    icon: <StatsIcon color="inherit" />,
    component: StudentIndex,
    layout: "/admin",
  },
  {
    path: "/teachers",
    name: "Teachers Details",
    icon: <StatsIcon color="inherit" />,
    component: TeachersIndex,
    layout: "/admin",
  },
  {
    path: "/parent",
    name: "Parent Details",
    icon: <StatsIcon color="inherit" />,
    component: parentIndex,
    layout: "/admin",
  },
  {
    path: "/message",
    name: "Send Message",
    icon: <StatsIcon color="inherit" />,
    component: Messageindex,
    layout: "/admin",
  },
  {
    path: "/feedback",
    name: " Get Feedback",
    icon: <StatsIcon color="inherit" />,
    component: Feedbackindex,
    layout: "/admin",
  },

  // {
  //   path: "/billing",
  //   name: "Billing",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/manage/user",
        name: " Manage Users",
        icon: <StatsIcon color="inherit" />,
        component: Manageindex,
        layout: "/admin",
      },
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
