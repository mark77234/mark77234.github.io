import type { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  // 추후 다른 페이지들도 여기에 추가할 수 있습니다
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/projects",
  //   element: <Projects />,
  // },
];
