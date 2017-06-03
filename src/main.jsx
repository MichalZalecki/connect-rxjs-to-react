import React from "react";
import ReactDOM from "react-dom";
import { Provider, createState } from "./state/RxState";
import App from "./components/App";
import reducer$ from "./reducers";

ReactDOM.render(
  <Provider state$={createState(reducer$)}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
