import logo from "./logo.svg";
import "./App.css";
import { RouteDefinition, useRoutes } from "solid-app-router";
import { lazy } from "solid-js";

const routes: RouteDefinition | RouteDefinition[] = [
  {
    path: "/view/:id",
    component: lazy(() => import("./pages/view")),
  },
  {
    path: "/",
    component: lazy(() => import("./pages/home")),
  },
];

function App() {
  const Routes = useRoutes(routes);
  return <Routes />;
}

export default App;
