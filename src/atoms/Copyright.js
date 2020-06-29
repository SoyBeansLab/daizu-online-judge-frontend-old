import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.primary.dark,
  },
}));

export default function CopyRight() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography className={classes.text} align="center" variant="body1">
        ©ICT Committee
      </Typography>
    </Container>
  );
}
