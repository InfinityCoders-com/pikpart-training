import { ForgotPassword, Login, LoginMobileOTP, Register } from '../modules/Auth'
import Logout from '../modules/Auth/containers/Logout'
import Home from '../modules/Home/container/Home'
import AboutUs from '../modules/AboutUs/container/AboutUs'
// import CourseContent from '../modules/CourseContent'
import Userprofile from '../modules/User/containers/UserProfile'
import Courses from '../modules/Courses/container/Courses'
import CourseContent from '../modules/CourseContent/container/CourseContent'


// Leave Label Empty If you don't want it in SideBar Item
// layout empty array if you don't want sidebar and header
// Do Not put sub routes inside children key if parent doesnot need submenu, keep subpaths on same level inside json

export const RoutesPath = {
  HOME: '/',
  Login: '/login',
  LoginMobileOTP: '/login/mobile',
  Registration: '/registration',
  Logout: '/logout',
  ForgotPassword: '/forgot-password',
  AboutUs: '/aboutUs',
  Courses: '/courses',
  CourseContent: '/course-content',
  // UserProfile: '/userProfile'

}

export const routesConfig: any = [
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: LoginMobileOTP,
    exact: true,
    icon: undefined,
    label: '',
    layout: [],
    link: RoutesPath.LoginMobileOTP,
    path: RoutesPath.LoginMobileOTP
  },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: Login,
    exact: true,
    icon: undefined,
    label: '',
    layout: [],
    link: RoutesPath.Login,
    path: RoutesPath.Login
  },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: Register,
    exact: true,
    icon: undefined,
    label: '',
    layout: [],
    link: RoutesPath.Registration,
    path: RoutesPath.Registration
  },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: ForgotPassword,
    exact: true,
    icon: undefined,
    label: '',
    layout: [],
    link: RoutesPath.ForgotPassword,
    path: RoutesPath.ForgotPassword
  },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: Logout,
    exact: false,
    icon: undefined,
    label: '',
    layout: [],
    link: RoutesPath.Logout,
    path: RoutesPath.Logout
  },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: Home,
    exact: true,
    icon: undefined,
    label: 'Home',
    layout: ['header', 'footer'],
    link: '/',
    path: '/'
  },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: AboutUs,
    exact: true,
    icon: undefined,
    label: '',
    layout: ['header', 'footer'],
    link: RoutesPath.AboutUs,
    path: RoutesPath.AboutUs
  },
  // {
  //   authenticated: false,
  //   bLabel: '',
  //   children: undefined,
  //   component: CourseContent,
  //   exact: true,
  //   icon: undefined,
  //   label: '',
  //   layout: ['header', 'footer'],
  //   link: RoutesPath.CourseContent,
  //   path: RoutesPath.CourseContent
  // },
  // {
  //   authenticated: false,
  //   bLabel: '',
  //   children: undefined,
  //   component: Userprofile,
  //   exact: true,
  //   icon: undefined,
  //   label: '',
  //   layout: ['header', 'footer'],
  //   link: RoutesPath.UserProfile,
  //   path: RoutesPath.UserProfile
  // },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: Courses,
    exact: true,
    icon: undefined,
    label: '',
    layout: ['header', 'footer'],
    link: RoutesPath.Courses,
    path: RoutesPath.Courses
  },
  {
    authenticated: false,
    bLabel: '',
    children: undefined,
    component: CourseContent,
    exact: true,
    icon: undefined,
    label: '',
    layout: ['header', 'footer'],
    link: `${RoutesPath.CourseContent}`,
    path: `${RoutesPath.CourseContent}/:courseId`
  }
]
