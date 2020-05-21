import { createSelector } from "reselect";

const submissionsTotalSelector = state => state.submissionsState.submissions.data.result.total || 10;

const submissionsSelector = state => state.submissionsState.submissions.data.entities.submissions || {};

const limitedSubmissionsSelector = createSelector(submissionsSelector, submissions => submissions);

const isfetched = createSelector(submissionsSelector, submissions => submissions.upcoming !== void 0);

const getSubmissionsPage = state => state.submissionsState.submissions.ui.page || 0;

const getSubmissions = createSelector(submissionsSelector, submissions => Object.values(submissions));

const getSubmissionById = (state, props) =>
  state.submissionsState.submissions.data.entities.submissions[props.submitId] || {};

export default {
  submissionsTotalSelector,
  submissionsSelector,
  limitedSubmissionsSelector,
  isfetched,
  getSubmissionsPage,
  getSubmissions,
  getSubmissionById,
};
