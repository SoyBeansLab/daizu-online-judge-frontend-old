import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ContestTabs from "../molecules/ContestTabs";

const useStyles = makeStyles(theme => ({
  root: {
    // この設定 App.jsに書いたほうが良い説ある
    margin: theme.spacing(3)
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2)
  }
}));

export default function Contests(props) {
  const classes = useStyles();

  const contestTopContent = props.contestTopContent;
  const problemLists = props.problemLists;
  const submitStatusLists = props.submitStatusLists;
  const rankingLists = props.rankingLists;

  return (
    <div className={classes.root}>
      <ContestTabs
        contestTopContent={contestTopContent}
        problemLists={problemLists}
        submitStatusLists={submitStatusLists}
        rankingLists={rankingLists}
      />
    </div>
  );
}

Contests.propTypes = {
  contestTopContent: PropTypes.string,
  problemLists: PropTypes.array,
  submitStatusLists: PropTypes.array,
  rankingLists: PropTypes.array
};
