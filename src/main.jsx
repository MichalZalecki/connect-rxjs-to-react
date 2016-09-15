import React from "react";
import ReactDOM from "react-dom";
import { RxStateProvider, createState } from "./state/RxState";
import App from "./components/App";
import reducer$ from "./reducers";

ReactDOM.render(
  <RxStateProvider state$={createState(reducer$)}>
    <App />
  </RxStateProvider>,
  document.getElementById("root"),
);
