import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import ProblemsTable from "../../molecules/ProblemsTable";

import { contestsOperations, contestsSelectors } from "../../state/ducks/contests";

function ProblemsTableContainer(props) {
  const { contestId } = useParams();
  const endpoint = `/contests/${contestId}`;

  const problemList = props.problemList;
  const isfetchedContest = props.isfetchedContest;
  const fetchContest = props.fetchContest;

  useEffect(() => {
    if (!isfetchedContest) {
      fetchContest(endpoint);
    }
  }, [isfetchedContest, fetchContest, endpoint]);

  return <ProblemsTable problemLists={problemList} contestId={contestId} />;
}

ProblemsTableContainer.propTypes = {
  problemList: PropTypes.array,
  isfetchedContest: PropTypes.bool,
  fetchContest: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  problemList: contestsSelectors.getProblemList(state, props),
  isfetchedContest: contestsSelectors.isfetchedContest(state, props),
});

const mapDispatchToProps = {
  fetchContest: contestsOperations.fetchContest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsTableContainer);
