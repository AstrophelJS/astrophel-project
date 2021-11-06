import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import {
  CacheServiceWorker,
  NotificationServiceWorker,
} from "./service-worker";
import "./index.css";
import AstrophelApp from "./AstrophelApp";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <AstrophelApp />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator && "PushManager" in window) {
  CacheServiceWorker.register();
  NotificationServiceWorker.register();
} else {
  console.log("Sorry, try to update your chrome browser");
}
