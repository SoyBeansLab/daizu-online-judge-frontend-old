import React from "react";
import CommingSoon from "../images/commingsoon.png";
import { makeStyles } from "@material-ui/core/styles";
import Typograhy from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    // この設定 App.jsに書いたほうが良い説ある
    margin: theme.spacing(3),
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    textAlign: "center",
    margin: theme.spacing(2),
  },
  text: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  },
  image: {},
}));

function Preparation() {
  const classes = useStyles();

  return (
    <div>
      <Typograhy variant="h3" className={classes.heading}>
        準備中です.....
      </Typograhy>
      <Typograhy variant="body1" className={classes.text}>
        このページはまだ準備中です。申し訳ございません....！
      </Typograhy>
      <Container maxWidth="xs">
        <img src={CommingSoon} alt="junbi" className={classes.image} />
      </Container>
    </div>
  );
}

export default Preparation;
