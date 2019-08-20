import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
  },
  button: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            hogehoge
          </Typography>
          <Button color="inherit" className={classes.button} component={Link} to="/">
            HOME
          </Button>
          <Button color="inherit" className={classes.button} component={Link} to="/contests">
            CONTESTS
          </Button>
          <Button color="inherit" className={classes.button} component={Link} to="/login">
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
