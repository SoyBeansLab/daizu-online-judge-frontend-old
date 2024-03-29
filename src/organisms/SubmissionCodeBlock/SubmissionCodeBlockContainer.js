import { connect } from "react-redux";

import SubmissionCodeBlockComponent from "./SubmissionCodeBlockComponent";

import { submissionsSelectors } from "../../state/ducks/submissions";

const mapStateToProps = (state, props) => ({
  submission: submissionsSelectors.getSubmissionBySubmitId(state, props),
});

export default connect(mapStateToProps)(SubmissionCodeBlockComponent);
