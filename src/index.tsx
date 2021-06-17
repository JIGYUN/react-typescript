import React from "react";
import { Provider } from "mobx-react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA