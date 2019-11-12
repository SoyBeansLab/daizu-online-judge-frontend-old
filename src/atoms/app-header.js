import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Logo from "../images/daizuLogo.png";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    width: "20%",
    color: "#ffffff",
    border: "0"
  },
  button: {
    marginRight: theme.spacing(2),
    color: "#ffffff"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Container justify="flex-start">
            <Link to="/">
              <img src={Logo} alt="logo" className={classes.title} />
            </Link>
          </Container>

          <Button
            color="inherit"
            className={classes.button}
            component={Link}
            to="/"
          >
            HOME
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            component={Link}
            to="/contests"
          >
            CONTESTS
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            component={Link}
            to="/login"
          >
            SIGN IN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
