import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import components
import rishi from "./pages/temp/works-rishi";
import syrc from "./pages/temp/works-syrc";
import kurokoji from "./pages/temp/works-kurokoji";
import para from "./pages/temp/works-para.js";
import Header from "./atoms/app-header";
import Footer from "./atoms/app-footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
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
          <li>
            <Link to="/ucpr">ucpr works</Link>
          </li>
        </ul>
        <Route exact path="/rishi" component={rishi} />
        <Route exact path="/syrc" component={syrc} />
        <Route exact path="/kurokoji" component={kurokoji} />
        <Route exact path="/ucpr" component={para} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
