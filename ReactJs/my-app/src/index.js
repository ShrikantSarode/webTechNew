import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";
import projectroute from "./projectroute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// console.log(React,ReactDOM);

const result = ReactDOM.createRoot(document.getElementById("root"));

// result.render("What is your Age?");
// var userName = "Shrikant";
// var age = 22;

// result.render(<App />);

result.render(
     <RouterProvider router={projectroute} />
)
