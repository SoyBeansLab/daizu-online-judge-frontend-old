import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typograhy from "@material-ui/core/Typography";

import ContestsTable from "../organisms/ContestsTable";

const useStyles = makeStyles(theme => ({
  root: {
    // この設定 App.jsに書いたほうが良い説ある
    margin: theme.spacing(3),
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
}));

export default function Contests(props) {
  const classes = useStyles();

  const currentContestLists = props.currentContestLists || [];
  const upcomingContestLists = props.upcomingContestLists || [];
  const recentContestLists = props.recentContestLists || [];

  return (
    <div className={classes.root}>
      <Typograhy variant="h5" className={classes.heading}>
        コンテスト一覧
      </Typograhy>
      <ContestsTable
        currentContestLists={Object.values(currentContestLists)}
        upcomingContestLists={Object.values(upcomingContestLists)}
        recentContestLists={Object.values(recentContestLists)}
      />
    </div>
  );
}

Contests.propTypes = {
  currentContestLists: PropTypes.array,
  upcomingContestLists: PropTypes.array,
  recentContestLists: PropTypes.array,
};
