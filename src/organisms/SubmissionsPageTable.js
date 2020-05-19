import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SubmissionsStatusTable from "../molecules/SubmitStatusTable";
import Pagination from "../atoms/Paginations";

import { submissionsOperations, submissionsSelectors } from "../state/ducks/submissions";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
}));

function SubmissionsPageTableContainer(props) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { contestId } = useParams();

  const submissions = props.submissions;
  const page = props.page;
  const total = props.total;
  const setSubmissionsPage = props.setSubmissionsPage;

  const paginationClickHandler = (_, val) => {
    history.push(`${location.pathname}?tab=submits&page=${val}`);
    setSubmissionsPage(val);
  };

  useEffect(() => {
    //    props.setSubmissionsPage();
  }, []);

  return (
    <div className={classes.root}>
      <SubmissionsStatusTable contestId={contestId} submissions={submissions} />
      <Pagination offset={page} total={total} onClick={(event, offset) => paginationClickHandler(event, offset)} />
    </div>
  );
}

SubmissionsPageTableContainer.propTypes = {
  submissions: PropTypes.array,
  page: PropTypes.number,
  total: PropTypes.number,
  setSubmissionsPage: PropTypes.func,
};

const mapStateToProps = state => ({
  page: submissionsSelectors.getSubmissionsPage(state),
  total: submissionsSelectors.submissionsTotalSelector(state),
  submissions: submissionsSelectors.submissionsSelector(state),
});

const mapDispatchToProps = {
  setSubmissionsPage: submissionsOperations.setSubmissionsPage,
};

const SubmissionsPageTable = connect(mapStateToProps, mapDispatchToProps)(SubmissionsPageTableContainer);

export default SubmissionsPageTable;
