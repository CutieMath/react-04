import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
// the context
import { ContextProvider } from "./contexts/ContextProvider";

const MOUNT = document.getElementById("root");

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  MOUNT
);
