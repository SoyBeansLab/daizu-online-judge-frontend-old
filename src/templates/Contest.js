import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ContestTabs from "../organisms/ContestTabPage";

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
}));

export default function Contests(props) {
  const classes = useStyles();

  const problemLists = props.problemLists || [];

  return (
    <div className={classes.root}>
      <ContestTabs problemLists={problemLists} />
    </div>
  );
}

Contests.propTypes = {
  problemLists: PropTypes.array,
};
