import { connect } from "react-redux";

import ProblemsTableComponent from "./ProblemsTableComponent";

import { problemsOperations, problemsSelectors } from "../../state/ducks/problems";

const mapStateToProps = (state, props) => ({
  problemList: problemsSelectors.getProblemsById(state, props),
  isFetched: problemsSelectors.isFetchedProblems(state, props),
});

const mapDispatchToProps = {
  fetchProblems: problemsOperations.fetchProblems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemsTableComponent);
