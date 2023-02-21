import Homepage from "../components/pages/homepage";
import Contactpage from "../components/pages/Contactpage";
import AboutUsPage from "../components/containers/aboutuspage/Aboutuspage";
import Blogspage from "../components/pages/Blogspage";
const publicRoutes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/contact",
    component: Contactpage,
  },
  {
    path: "/blog",
    component: Blogspage,
  },
  {
    path: "/about",
    component: AboutUsPage,
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
