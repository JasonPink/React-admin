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
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import SiderDemo from "./components/SiderDemo";
import "./style/index.less";

// function Index() {
//   return <div>Index</div>;
// }
class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Index</div>
        <NavLink to="/index/childa">A</NavLink>
        <NavLink to="/index/childb">B</NavLink>
        <Route path="/index/childa" component={ChildA}></Route>
        <Route path="/index/childb" component={ChildB}></Route>
      </div>
    );
  }
}

function Home() {
  return <div>Home</div>;
}
function About() {
  return <div>About</div>;
}

function ChildA() {
  return <div>ChildA</div>;
}

function ChildB() {
  return <div>ChildB</div>;
}

ReactDOM.render(
  <Router>
    <div>
      <NavLink to="/index/childa">Index</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
    <Switch>
      <Route path="/index" component={Index}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Redirect from="/" to="/index/childa" exact></Redirect>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
