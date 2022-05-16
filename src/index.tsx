import "solid-js";
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import { Router } from "solid-app-router";
import * as serviceWorker from "./serviceWorker";
import { MetaProvider } from "solid-meta";

render(
  () => (
    <MetaProvider>
      <Router>
        <App />
      </Router>
    </MetaProvider>
  ),
  document.getElementById("root") as Node
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
