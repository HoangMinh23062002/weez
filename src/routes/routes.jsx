import Homepage from "../components/pages/homepage";
import Contactpage from "../components/pages/contactpage";
import AboutPage from "../components/pages/AboutPage";

import Blogspage from "../components/pages/blogspage";
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
    component: AboutPage,
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
