import React from "react";
import ReactDOM from "react-dom";
import App from "app/components/App";
import { RxStateProvider } from "./rx-state/RxState"
import state$ from "./state";

ReactDOM.render(
  <RxStateProvider state$={state$}>
    <App />
  </RxStateProvider>,
  document.getElementById("root"),
);
