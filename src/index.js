// Import các thư viện cần thiết
import React from "react";
import ReactDOM from "react-dom/client";
// Import Redux Provider và store
import { Provider } from "react-redux";
import store from "./store";
// Import component chính và CSS
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </React.StrictMode>
);
