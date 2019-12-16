import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ContestTabs from "../molecules/ContestTabs";

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
}));

export default function Contests(props) {
  const classes = useStyles();

  const checkUndefined = (v, d) => {
    if (typeof v === "undefined") {
      return d;
    } else {
      return v;
    }
  };

  const contestTopContent = props.contestTopContent;
  const problemLists = checkUndefined(props.problemLists, []);
  const submitStatusLists = checkUndefined(props.submitStatusLists, []);
  //const rankingLists = checkUndefined(props.rankingLists, []);
  const contestId = checkUndefined(props.contestId, "");

  return (
    <div className={classes.root}>
      <ContestTabs
        contestTopContent={contestTopContent}
        problemLists={problemLists}
        submitStatusLists={submitStatusLists}
        contestId={contestId}
      />
    </div>
  );
}

Contests.propTypes = {
  contestTopContent: PropTypes.string,
  problemLists: PropTypes.array,
  submitStatusLists: PropTypes.array,
  contestId: PropTypes.string,
  //rankingLists: PropTypes.array
};
