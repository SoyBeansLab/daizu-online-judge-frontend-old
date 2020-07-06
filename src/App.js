import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import Home from "./pages/Home";
import Contests from "./pages/Contests";
import Contest from "./pages/Contest";
import Problem from "./pages/Problem";
import SubmitStatusState from "./pages/SubmitStatusState";
import Signin from "./templates/SignInModal";
import Signup from "./templates/SignUpModal";
import NotFound from "./templates/NotFound";
import Debug from "./pages/temp/works-para";
import Loading from "./organisms/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./state/store";

const useStyles = makeStyles(theme => ({
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    margin: theme.spacing(3),
  },
}));

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  const classes = useStyles();
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={classes.app}>
      <ReduxProvider store={reduxStore}>
        <BrowserRouter>
          <Header />
          <div className={classes.root}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contests" component={Contests} />
              <Route exact path="/contests/:contestId" component={Contest} />
              <Route exact path="/contests/:contestId/problems/:problemId" component={Problem} />
              <Route exact path="/contests/:contestId/submits/:submitId" component={SubmitStatusState} />
              <Route exact path="/signin" component={Signin} />
              <Route exect path="/signup" component={Signup} />
              <Route exact path="/debug" component={Debug} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </ReduxProvider>
    </div>
  );
}

export default App;
