import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import ProblemsTable from "../../molecules/ProblemsTable";

function ProblemsTableComponent(props) {
  const { contestId } = useParams();
  const endpoint = `/contests/${contestId}/problems`;

  const problemList = props.problemList;
  const fetchProblems = props.fetchProblems;
  const isFetched = props.isFetched;

  useEffect(() => {
    if (!isFetched) {
      fetchProblems(endpoint);
    }
  }, [isFetched, fetchProblems, endpoint]);

  return <ProblemsTable problemLists={problemList} contestId={contestId} />;
}

ProblemsTableComponent.propTypes = {
  problemList: PropTypes.array,
  isFetched: PropTypes.bool,
  fetchProblems: PropTypes.func,
};

export default ProblemsTableComponent;
