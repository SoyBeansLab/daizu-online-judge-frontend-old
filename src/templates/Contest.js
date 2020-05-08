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

  const contestTopContent = props.contestTopContent || "";
  const problemLists = props.problemLists || [];
  const submitStatusLists = props.submitStatusLists;
  //const rankingLists = checkUndefined(props.rankingLists, []);
  const contestId = props.contestId;
  const rankings = props.rankings;
  const rankingsTotal = props.rankingsTotal;
  const submissions = props.submissions;
  const submissionsTotal = props.submissionsTotal;

  return (
    <div className={classes.root}>
      <ContestTabs
        contestTopContent={contestTopContent}
        problemLists={problemLists}
        submitStatusLists={submitStatusLists}
        contestId={contestId}
        rankings={rankings}
        rankingsTotal={rankingsTotal}
        submissions={submissions}
        submissionsTotal={submissionsTotal}
      />
    </div>
  );
}

Contests.propTypes = {
  contestTopContent: PropTypes.string,
  problemLists: PropTypes.array,
  submitStatusLists: PropTypes.array,
  contestId: PropTypes.string,
  rankings: PropTypes.array,
  rankingsTotal: PropTypes.number,
  submissions: PropTypes.array,
  submissionsTotal: PropTypes.number,
};
