import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 450
  },
  card: {
    minWidth: 450,
    maxWidth: 500,
    margin: theme.spacing(1)
  },
  cardHeader: {
    textAlign: "center"
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 450
  },
  checkbox: {
    marginLeft: theme.spacing(1)
  },
  tabs: {
    margin: theme.spacing(3)
  }
}));

function SignUpModal() {
  const classes = useStyles();
  const [state, setValues] = React.useState({
    id: "",
    email: "",
    password: "",
    checkedA: false
  });

  const handleChange = name => event => {
    setValues({ ...state, [name]: event.target.value });
  };

  return (
    <div>
      <CardActions>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-id"
            label="Your New ID"
            className={classes.textField}
            value={state.id}
            onChange={handleChange("id")}
            margin="normal"
            required="true"
          />
        </form>
      </CardActions>
      <CardActions>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-email"
            label="E-Mail"
            className={classes.textField}
            value={state.email}
            onChange={handleChange("email")}
            margin="normal"
            required="true"
            type="email"
          />
        </form>
      </CardActions>
      <CardActions>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-password"
            label="Password"
            className={classes.textField}
            value={state.password}
            onChange={handleChange("password")}
            margin="normal"
            required="true"
            type="password"
          />
        </form>
      </CardActions>
      <CardActions>
        <Button
          variant="contained"
          className={classes.button}
          color="secondary"
        >
          SIGN UP
        </Button>
      </CardActions>
    </div>
  );
}

// 仮データを突っ込むための関数
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

// propsの型指定
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default function ModalTab() {
  const classes = useStyles();
  /*const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  */
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="SignUp" className={classes.cardHeader} />
        <SignUpModal />
      </Card>
    </div>
  );
}
