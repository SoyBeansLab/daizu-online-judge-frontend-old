import { connect } from "react-redux";

import SubmissionDetailsComponent from "./SubmissionDetailsComponent";

import { submissionsOperations, submissionsSelectors } from "../../state/ducks/submissions";

const mapStateToProps = (state, props) => ({
  submission: submissionsSelectors.getSubmissionBySubmitId(state, props),
});

const mapDispatchToProps = {
  fetchSubmission: submissionsOperations.fetchSubmission,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionDetailsComponent);
