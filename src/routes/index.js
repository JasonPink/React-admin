import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routesConfig from "./config";
import AllComponents from "../components/index";

const CRouter = () => {
  const createMenu = (r) => {
    const route = (r) => {
      const Component = r.component && AllComponents[r.component];
      return (
        <Route
          key={r.route || r.key}
          exact
          path={r.route || r.key}
          component={Component}
        />
      );
    };

    const subRoute = (r) =>
      r.subs &&
      r.subs.map((subR) => (subR.subs ? subRoute(subR) : route(subR)));

    return r.component ? route(r) : subRoute(r);
  };
  const createRoute = () =>
    routesConfig.map((item) => {
      return createMenu(item);
    });
  console.log("ssss", createRoute());
  return (
    <Switch>
      {createRoute()}
      {/* <Route render={() => <Redirect to="/404" />} /> */}
    </Switch>
  );
};

export default CRouter;
