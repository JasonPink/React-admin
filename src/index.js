import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import Container from "./page/Layout.jsx";
import "./index.css";
import "./style/index.less";

function Home() {
  return <div>这是home组件</div>;
}

function Index() {
  return <div>这是index组件</div>;
}

ReactDOM.render(
  <Router>
    <Route
      path="/"
      render={() => (
        <Container>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={Home} />
        </Container>
      )}
    >
    </Route>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
