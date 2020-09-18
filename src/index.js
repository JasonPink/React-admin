import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Container from "./page/Layout.jsx";
import "./index.css";
import "./style/index.less";

import Buttons from "./components/Buttons.jsx"
import Icons from "./components/Icons.jsx"
import TodoList from "./components/TodoList.jsx"
import Dashborad from "./components/Dashborad.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Routeconfig from "./components/Routeconfig.jsx"
import Login from "./page/Login.jsx"
import 'reset-css';

// ReactDOM.render(
//   <Router>
//     <Route path="/app" component={Container}>
//       <Route path="/app/dashboard/index" component={Dashborad} />
//       <Route path="/app/user/buttons" component={Buttons} />
//       <Route path="/app/user/icons" component={Icons} />
//     </Route>
//   </Router>,
//   document.getElementById("root")
// );

function Home() {
  return (
    <div>这是home</div>
  )
}

function About() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Login}></Route>
    <Route path="/app">
      <Container>
        <Route path="/app/dashboard/index">
          <TodoList />
        </Route>
        <Route path="/app/user/buttons">
          <Buttons />
        </Route>
        <Route path="/app/user/icons">
          <Icons />
        </Route>
      </Container>
    </Route>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
