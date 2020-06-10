import { connect } from "react-redux";

import ProblemDetailsComponent from "./ProblemDetailsComponent";

import { problemsOperations, problemsSelectors } from "../../state/ducks/problems";

const mapStateToProps = (state, props) => ({
  problemDetails: problemsSelectors.getProblemById(state, props),
  isFetchedProblem: problemsSelectors.isFetchedProblem(state, props),
});

const mapDispatchToProps = {
  fetchProblem: problemsOperations.fetchProblemById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemDetailsComponent);
