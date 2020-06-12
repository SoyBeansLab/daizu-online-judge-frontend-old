import { connect } from "react-redux";

import ContestTabPageComponent from "./ContestTabPageComponent";

import { rankingsOperations, rankingsSelectors } from "../../state/ducks/rankings";
import { submissionsOperations, submissionsSelectors } from "../../state/ducks/submissions";
import { registrationsOperations, registrationsSelectors } from "../../state/ducks/registrations";

const mapStateToProps = (state, props) => ({
  rankingPage: rankingsSelectors.getPage(state),
  submissionsPage: submissionsSelectors.getPage(state),
  isRegisted: registrationsSelectors.isRegisted(state, props),
});

const mapDispatchToProps = {
  setRankingPage: rankingsOperations.setRankingPage,
  setSubmissionsPage: submissionsOperations.setSubmissionsPage,
  fetchRegistration: registrationsOperations.fetchRegistration,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestTabPageComponent);
