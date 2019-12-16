import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./atoms/app-header";
import Footer from "./atoms/app-footer";
import Home from "./pages/Home";
import Contests from "./pages/Contests";
import Contest from "./pages/Contest";
import Problem from "./pages/Problem";
import SubmitStatusState from "./pages/SubmitStatusState";
import Signin from "./templates/SignInModal";
import Signup from "./templates/SignUpModal";
import Preparation from "./templates/Preparation";
import Debug from "./pages/temp/works-para";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className={classes.root}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contests" component={Contests} />
            <Route exact path="/contests/:contest_id" component={Contest} />
            <Route exact path="/contests/:contest_id/problems/:problem_id" component={Problem} />
            <Route exact path="/contests/:contest_id/submits/:submit_id" component={SubmitStatusState} />
            <Route exact path="/signin" component={Signin} />
            <Route exect path="/signup" component={Signup} />
            <Route exact path="/debug" component={Debug} />
            <Route component={Preparation} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
