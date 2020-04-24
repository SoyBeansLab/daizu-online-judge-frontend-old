import React from "react";
import CommingSoon from "../images/commingsoon.png";
import { makeStyles } from "@material-ui/core/styles";
import Typograhy from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
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
  imageContainer: {
    textAlign: "center",
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div>
      <Typograhy variant="h3" className={classes.heading}>
        404 Not Found
      </Typograhy>
      <Typograhy variant="body1" className={classes.text}>
        申し訳ありません。指定されたページは見つかりません。
      </Typograhy>
      <Container maxWidth="xs" className={classes.imageContainer}>
        <img src={CommingSoon} alt="notfound" />
      </Container>
    </div>
  );
}

export default NotFound;
