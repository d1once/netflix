import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
