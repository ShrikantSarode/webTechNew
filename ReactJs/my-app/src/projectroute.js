import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Content from "./Components/Content";
import Header from "./Components/Header";
import App from "./Components/App";
import Product1 from "./Components/Product1";
import Class1 from "./Components/Class1";
import Class2 from "./Components/Class2";
import Class3 from "./Components/Class3";
import Class4 from "./Components/Class4";
import CompA from "./Components/CompA";
import Parent from "./Components/Parent";
import Parent2 from "./Components/Parent2";

const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/content",
        element: <Content />,
      },
      {
        path: "/product",
        element: <Product1 />,
      },

      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/class1",
        element: <Class1 name="Sharukh" age="23" />,
      },
      {
        path: "/class2",
        element: <Class2 />,
      },
      {
        path: "/class3",
        element: <Class3 />,
      },
      {
        path: "/class4",
        element: <Class4 />,
      },
      {
        path: "/propsdrilling",
        element: <CompA />,
      },
      {
        path: "/parent",
        element: <Parent />,
      },
      {
        path: "/parent2",
        element: <Parent2 />,
      },
    ],
  },
]);
export default projectroute;
