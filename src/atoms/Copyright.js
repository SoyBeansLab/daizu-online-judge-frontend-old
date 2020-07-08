import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  text: {
    color: theme.palette.primary.dark,
  },
}));

export default function CopyRight(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography className={classes.text} align="center" variant="body1" {...props}>
        ©ICT Committee
      </Typography>
    </Container>
  );
}

CopyRight.propTypes = {
  className: PropTypes.object,
};
