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

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.black,
      },
    },
  },
}))(props => <MenuItem {...props} />);

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function SigninMenuButton(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        className={classes.button}
        onClick={handleClick}
      >
        {!isAuthenticated && "SIGN IN"}
        {isAuthenticated && "username"}
        <ArrowDropDownIcon />
      </Button>

      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {!isAuthenticated && (
          <StyledMenuItem onClick={loginWithRedirect}>
            <ListItemText primary="SignIn" />
          </StyledMenuItem>
        )}
        {isAuthenticated && (
          <div>
            <StyledMenuItem>
              <ListItemText primary="Profile" />
            </StyledMenuItem>
            <StyledMenuItem onClick={logoutWithRedirect}>
              <ListItemText primary="Sign Out" />
            </StyledMenuItem>
          </div>
        )}
      </StyledMenu>
    </div>
  );
}

SigninMenuButton.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginWithRedirect: PropTypes.func,
  logoutWithRedirect: PropTypes.func,
};
