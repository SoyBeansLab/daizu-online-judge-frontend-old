import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 450,
  },
  card: {
    minWidth: 450,
    maxWidth: 500,
    margin: theme.spacing(1),
  },
  cardHeader: {
    textAlign: "center",
  },
  cardFooter: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 450,
  },
  checkbox: {
    marginLeft: theme.spacing(1),
  },
  tabs: {
    margin: theme.spacing(3),
  },
  linkTypo: {
    marginBottom: theme.spacing(1),
  },
}));

function SignInModal() {
  const classes = useStyles();
  const [state, setValues] = React.useState({
    id: "",
    password: "",
    checkedA: false,
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
            label="Your ID"
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
        <FormControlLabel
          control={
            <Checkbox checked={state.checked} onChange={handleChange("checkedA")} value="checkedA" color="secondary" />
          }
          label="IDとパスワードを記憶する"
          className={classes.checkbox}
        />
      </CardActions>
      <CardActions>
        <Button variant="contained" className={classes.button} color="secondary">
          SIGN IN
        </Button>
      </CardActions>
    </div>
  );
}

function SignInFooter() {
  const classes = useStyles();

  return (
    <div className={classes.cardFooter}>
      <Typography className={classes.linkTypo}>
        <Link className={classes.link} component={RouterLink} to="/debug">
          SignInでお困りの場合
        </Link>
      </Typography>
      <Typography className={classes.linkTypo}>
        <Link className={classes.link} component={RouterLink} to="/signup">
          アカウントをお持ちでない場合
        </Link>
      </Typography>
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
  children: PropTypes.node.isRequired,
};

export default function ModalTab() {
  const classes = useStyles();
  /* const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  */
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="SignIn" className={classes.cardHeader} />
        <SignInModal />
        <SignInFooter />
      </Card>
    </div>
  );
}
