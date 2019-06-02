import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Photos</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;

/*import React from "react";

function Works() {
  return (
    <div className="works">
      <h2>helloWorld!</h2>
    </div>
  );
}
export default Works;*/
