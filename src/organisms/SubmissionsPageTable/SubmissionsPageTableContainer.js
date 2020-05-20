import { connect } from "react-redux";
import SubmissionsPageTableComponent from "./SubmissionsPageTableComponent";
import { submissionsOperations, submissionsSelectors } from "../../state/ducks/submissions";

const mapStateToProps = state => ({
  page: submissionsSelectors.getSubmissionsPage(state),
  total: submissionsSelectors.submissionsTotalSelector(state),
  submissions: submissionsSelectors.submissionsSelector(state),
});

const mapDispatchToProps = {
  setSubmissionsPage: submissionsOperations.setSubmissionsPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionsPageTableComponent);
