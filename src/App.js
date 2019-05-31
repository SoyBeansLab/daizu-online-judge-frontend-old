import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

const test = () => <h1>Hello World!</h1>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/test">test link</Link>
          <Route exact path="/test" component={test} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
