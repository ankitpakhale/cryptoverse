import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
// import "antd/dist/antd.css";

// Refer to below blog
// https://captain-eo.hashnode.dev/an-easy-way-to-make-api-calls-redux-toolkit

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
