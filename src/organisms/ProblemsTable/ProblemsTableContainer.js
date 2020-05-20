import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import ProblemsTable from "../../molecules/ProblemsTable";

import { contestsSelectors } from "../../state/ducks/contests";

function ProblemsTableContainer(props) {
  const problemList = props.problemList;
  const { contestId } = useParams();

  return <ProblemsTable problemLists={problemList} contestId={contestId} />;
}

ProblemsTableContainer.propTypes = {
  problemList: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  problemList: contestsSelectors.getProblemList(state, props),
});

export default connect(mapStateToProps)(ProblemsTableContainer);
