import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "100%",
    minHeight: 250,
    boxShadow: "none",
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

function EntryRegistrationCardComponent(props) {
  const classes = useStyles();
  const { user, getTokenSilently } = useAuth0();
  const { contestId } = useParams();

  const entry = props.entry;

  async function registrationHandler() {
    const payload = {
      username: user.nickname,
      contest_id: contestId,
    };
    const token = await getTokenSilently();
    entry(`/contests/${contestId}/registrations`, token, payload);
  }

  /*  if (isPosted) {
    return <Redirect to={`/contests/${contestId}?tab=top`} />;
  }
*/
  return (
    <Paper className={classes.root}>
      <Typography variant="h4">Welcome to the {contestId}!</Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={async () => {
          await registrationHandler();
        }}
      >
        参加登録
      </Button>
    </Paper>
  );
}

EntryRegistrationCardComponent.propTypes = {
  entry: PropTypes.func,
};

export default EntryRegistrationCardComponent;
