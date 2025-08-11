import type { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import Career from "../pages/career";
import Activity from "../pages/activity";
import Project from "../pages/project";
import Contact from "../pages/contact";
import Skills from "../pages/skills";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/activity",
    element: <Activity />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
];
