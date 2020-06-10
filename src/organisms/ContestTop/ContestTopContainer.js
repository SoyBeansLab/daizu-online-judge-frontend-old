import { connect } from "react-redux";

import ContestTopComponent from "./ContestTopComponent";

import { contestsOperations, contestsSelectors } from "../../state/ducks/contests";

const mapStateToProps = (state, props) => ({
  contest: contestsSelectors.contestSelector(state, props),
  isfetchedContest: contestsSelectors.isfetchedContest(state, props),
});

const mapDispatchToProps = {
  fetchContest: contestsOperations.fetchContest,
};

const ContestTop = connect(mapStateToProps, mapDispatchToProps)(ContestTopComponent);

export default ContestTop;
