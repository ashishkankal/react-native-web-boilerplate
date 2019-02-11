import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const title = "My Minimal React + Native Webpack Babel Setup";
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <div>{title}</div>
  </Provider>,
  document.getElementById("root")
);

module.hot.accept();
