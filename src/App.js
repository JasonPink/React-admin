import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p><Button type="primary">Button</Button></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React后台管理系统
        </a>
      </header>
    </div>
  );
}

export default App;
