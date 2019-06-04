import React from "react";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
// import Typo from "@material-ui/core/Typography";
import test from "./works-syrc";

function Works() {
  return (
    <div className="works">
      <Link to="/test" className="link">
        wa
      </Link>
      <Route to="/test" component={test} />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}
export default Works;
