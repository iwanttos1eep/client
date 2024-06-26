import React from "react";
import ReactDOM from "react-dom/client";
import RouterWrapper from "./router";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
