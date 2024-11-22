import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";
import projectroute from "./projectroute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import projectstore from "./Redux/projectstore";


 
// Create root for React app
const result = ReactDOM.createRoot(document.getElementById("root"));

// Render the app with Redux provider and Router
result.render(
  <Provider store={projectstore}>
    <RouterProvider router={projectroute} />
  </Provider>
);
