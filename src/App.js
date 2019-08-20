import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./atoms/app-header";
import Footer from "./atoms/app-footer";
import Home from "./pages/Home.js";
import Contests from "./pages/Contests.js";
import Preparation from "./templates/Preparation.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/contests" component={Contests} />
        <Route exact path="/login" component={Preparation} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
