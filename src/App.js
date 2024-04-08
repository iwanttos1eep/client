import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./routes/root"
import 'bootstrap/dist/css/bootstrap.css'
import Client from "./routes/client";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <Root />, </div>,
  },
  {
    path: "client/",
    element: <div> <Client /> </div>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);