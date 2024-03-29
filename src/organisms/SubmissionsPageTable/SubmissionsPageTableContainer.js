import { connect } from "react-redux";
import SubmissionsPageTableComponent from "./SubmissionsPageTableComponent";
import { submissionsOperations, submissionsSelectors } from "../../state/ducks/submissions";

const mapStateToProps = state => ({
  page: submissionsSelectors.getPage(state),
  total: submissionsSelectors.getTotal(state),
  submissions: submissionsSelectors.getSubmissionList(state),
});

const mapDispatchToProps = {
  setSubmissionsPage: submissionsOperations.setSubmissionsPage,
  fetchSubmissions: submissionsOperations.fetchSubmissions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionsPageTableComponent);
