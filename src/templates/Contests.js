import React from "react";
import PropTypes from "prop-types";
import ContestsListTabs from "../molecules/ContestsListTabs";
import { makeStyles } from "@material-ui/core/styles";
import Typograhy from "@material-ui/core/Typography";

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

  const currentContestLists = props.currentContestLists;
  const upcomingContestLists = props.upcomingContestLists;
  const recentContestLists = props.recentContestLists;

  return (
    <div className={classes.root}>
      <Typograhy variant="h5" className={classes.heading}>
        コンテスト一覧
      </Typograhy>
      <ContestsListTabs
        currentContestLists={currentContestLists}
        upcomingContestLists={upcomingContestLists}
        recentContestLists={recentContestLists}
      />
    </div>
  );
}

Contests.propTypes = {
  currentContestLists: PropTypes.array,
  upcomingContestLists: PropTypes.array,
  recentContestLists: PropTypes.array
};
