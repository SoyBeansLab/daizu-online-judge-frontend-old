import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  // TODO: 共通のスタイルがあるのでそれをまとめて別で適用してあげたいな
  current: {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    minWidth: "76px",
    color: "#FFFFFF",
    backgroundColor: theme.palette.secondary.main,
  },
  upcoming: {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    minWidth: "76px",
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.dark,
  },
  recent: {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    minWidth: "76px",
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

export default function ContestStatusChip(props) {
  const classes = useStyles();

  if (props.contestStatus === "current") {
    return <Chip className={classes.current} label="開催中" />;
  } else if (props.contestStatus === "upcoming") {
    return <Chip className={classes.upcoming} label="開催予定" />;
  } else {
    return <Chip className={classes.recent} label="終了" />;
  }
}

ContestStatusChip.propTypes = {
  label: PropTypes.string,
  contestStatus: PropTypes.string,
};
