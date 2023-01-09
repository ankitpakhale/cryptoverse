import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";


// import the provider object
import { Provider } from "react-redux";


// import your store 
import store from "./app/store";
// import "antd/dist/antd.css";

// Refer to below blog
// https://captain-eo.hashnode.dev/an-easy-way-to-make-api-calls-redux-toolkit

ReactDOM.render(
  <Router>
    {/* wrap your app with the provider object */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
