import { connect } from "react-redux";
import SubmissionsPageTableComponent from "./SubmissionsPageTableComponent";
import { submissionsOperations, submissionsSelectors } from "../../state/ducks/submissions";

const mapStateToProps = (state, props) => ({
  page: submissionsSelectors.getPageByContestId(state, props),
  total: submissionsSelectors.getTotalByContestId(state, props),
  submissions: submissionsSelectors.getSubmissionsByContestId(state, props),
});

const mapDispatchToProps = {
  setSubmissionsPage: submissionsOperations.setSubmissionsPage,
  fetchSubmissions: submissionsOperations.fetchSubmissions,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionsPageTableComponent);
