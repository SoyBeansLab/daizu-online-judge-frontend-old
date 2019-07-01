// import library etc.
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import components
import rishi from "./pages/temp/works-rishi";
import syrc from "./pages/temp/works-syrc";
import kurokoji from "./pages/temp/works-kurokoji";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/rishi">rishi works</Link>
            </li>
            <li>
              <Link to="/syrc">syrc works</Link>
            </li>
            <li>
              <Link to="/kurokoji">kurokoji works</Link>
            </li>
          </ul>
          <Route exact path="/rishi" component={rishi} />
          <Route exact path="/syrc" component={syrc} />
          <Route exact path="/kurokoji" component={kurokoji} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
