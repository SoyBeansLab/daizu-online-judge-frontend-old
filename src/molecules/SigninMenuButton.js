import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListItemText from "@material-ui/core/ListItemText";

const StyledMenu = withStyles({
  paper: {
    border: "2px solid #d3d4d5",
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function SigninMenuButton(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const username = props.username;
  const isAuthenticated = props.isAuthenticated;
  const loginWithRedirect = props.loginWithRedirect;
  const logoutWithRedirect = props.logoutWithRedirect;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="customized-menu" aria-haspopup="true" className={classes.button} onClick={handleClick}>
        {username}
        <ArrowDropDownIcon />
      </Button>

      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {!isAuthenticated && (
          <MenuItem onClick={loginWithRedirect}>
            <ListItemText primary="SignIn" />
          </MenuItem>
        )}
        {isAuthenticated && (
          <div>
            <MenuItem>
              <ListItemText primary="Profile" />
            </MenuItem>
            <MenuItem onClick={logoutWithRedirect}>
              <ListItemText primary="Sign Out" />
            </MenuItem>
          </div>
        )}
      </StyledMenu>
    </div>
  );
}

SigninMenuButton.propTypes = {
  username: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loginWithRedirect: PropTypes.func.isRequired,
  logoutWithRedirect: PropTypes.func.isRequired,
};
