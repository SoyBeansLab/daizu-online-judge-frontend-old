import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import SubmissionsStatusTable from "../../molecules/SubmitStatusTable";
import Pagination from "../../atoms/Paginations";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
}));

function SubmissionsPageTableComponent(props) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { contestId } = useParams();
  const endpoint = `/contests/${contestId}/submits`;

  const limit = 10; // tableにはrowを10行までしか表示しませんの合図!
  const submissions = props.submissions;
  const page = props.page;
  const total = props.total;
  const setSubmissionsPage = props.setSubmissionsPage;
  const fetchSubmissions = props.fetchSubmissions;

  const paginationClickHandler = (event, val) => {
    setSubmissionsPage(val);
    fetchSubmissions(`${endpoint}?page=${val}`);
    history.push(`${location.pathname}?tab=submits&page=${val}`);
  };

  useEffect(() => {
    fetchSubmissions(`${endpoint}?page=${page}`);
  }, [fetchSubmissions, endpoint, page]);

  return (
    <div className={classes.root}>
      <SubmissionsStatusTable contestId={contestId} submissions={submissions} />
      <Pagination
        limit={limit}
        offset={page}
        total={total}
        onClick={(event, offset) => paginationClickHandler(event, offset)}
      />
    </div>
  );
}

SubmissionsPageTableComponent.propTypes = {
  submissions: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setSubmissionsPage: PropTypes.func.isRequired,
  fetchSubmissions: PropTypes.func.isRequired,
};

export default SubmissionsPageTableComponent;
