import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./atoms/app-header";
import Footer from "./atoms/app-footer";
import Home from "./pages/Home.js";
import Contests from "./pages/Contests.js";
import Signin from "./templates/SignInModal.js";
//import Preparation from "./templates/Preparation.js";
import Debug from "./pages/temp/works-para";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className={classes.root}>
          <Route exact path="/" component={Home} />
          <Route exact path="/contests" component={Contests} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/debug" component={Debug} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
