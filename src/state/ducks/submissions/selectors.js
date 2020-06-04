import { createSelector } from "reselect";

const submissionsSelector = state => state.submissionsState.submissions.data.submissions || {};

const submissionSelector = (state, props) => state.submissionsState.submissions.data.submission[props.submitId] || {};

const submissionsUISelector = state => state.submissionsState.submissions.ui || {};

const isfetched = createSelector(submissionsSelector, submissions => submissions.upcoming !== void 0);

// 特定のContestのSubmission一覧を取得する
const getSubmissions = createSelector(submissionsSelector, submissions => Object.values(submissions));

// Submission単体を取得する.
// propsにSubmitIdが必要
const getSubmissionsBySubmitId = createSelector(submissionSelector, submission => submission);

// paginationのpageを取得するselector
const getPage = createSelector(submissionsUISelector, ui => ui.page || 0);

// submissionsのtotalを取得するselector
const getTotal = createSelector(submissionsUISelector, ui => ui.total);

export default {
  isfetched,
  getSubmissions,
  getSubmissionsBySubmitId,
  getPage,
  getTotal,
};
