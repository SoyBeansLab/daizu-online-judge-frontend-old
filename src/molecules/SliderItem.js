import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import urljoin from "url-join";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: ["Noto Sans JS", "sans-serif"].join(","),
  },
  card: {
    minWidth: 275,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
  },
  title: {
    fontWeight: "bolder",
    margin: theme.spacing(1),
  },
  subtitle: {
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export default function SliderItem(props) {
  const classes = useStyles();

  const contestId = props.contestId || "";
  const contestName = props.contestName || "";
  const contestDate = props.contestDate || "";
  const contestTime = props.contestTime || 0;
  const contestDescription = props.contestDescription || "";

  return (
    <div className={classes.root}>
      <Card className={classes.card} elevation={0}>
        <CardContent>
          <Typography variant="h3" className={classes.title}>
            {contestName}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {contestDate} {contestTime}
          </Typography>
          <Typography variant="body1">{contestDescription}</Typography>
        </CardContent>
        <CardActions classes={{ root: classes.root }}>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            className={classes.button}
            component={Link}
            to={urljoin("/contests", contestId)}
          >
            参加する
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SliderItem.propTypes = {
  contestId: PropTypes.string,
  contestName: PropTypes.string,
  contestDate: PropTypes.string,
  contestTime: PropTypes.number,
  contestDescription: PropTypes.string,
};
