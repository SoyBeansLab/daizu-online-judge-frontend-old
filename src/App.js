import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./atoms/app-header";
import Footer from "./atoms/app-footer";
import Home from "./pages/Home";
import Contests from "./pages/Contests";
import Signin from "./templates/SignInModal";
//import Preparation from "./templates/Preparation";
import Debug from "./pages/temp/works-para";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
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
