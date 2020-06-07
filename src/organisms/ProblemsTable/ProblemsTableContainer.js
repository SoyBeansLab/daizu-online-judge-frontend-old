import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import ProblemsTable from "../../molecules/ProblemsTable";

import { problemsOperations, problemsSelectors } from "../../state/ducks/problems";

function ProblemsTableContainer(props) {
  const { contestId } = useParams();
  const endpoint = `/contests/${contestId}/problems`;

  const problemList = props.problemList;
  const fetchProblems = props.fetchProblems;

  useEffect(() => {
    fetchProblems(endpoint);
  }, [fetchProblems, endpoint]);

  return <ProblemsTable problemLists={problemList} contestId={contestId} />;
}

ProblemsTableContainer.propTypes = {
  problemList: PropTypes.array,
  isfetchedContest: PropTypes.bool,
  fetchProblems: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  problemList: problemsSelectors.getProblemsById(state, props),
});

const mapDispatchToProps = {
  fetchProblems: problemsOperations.fetchProblems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsTableContainer);
