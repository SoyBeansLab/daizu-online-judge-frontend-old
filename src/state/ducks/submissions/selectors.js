import { createSelector } from "reselect";

const submissionsTotalSelector = state => state.submissionsState.submissions.data.total || 10;

const submissionsSelector = state => state.submissionsState.submissions.data.data || [];

const limitedSubmissionsSelector = createSelector(submissionsSelector, submissions => submissions);

const isfetched = createSelector(submissionsSelector, submissions => submissions.upcoming !== void 0);

const getSubmissionsPage = state => state.submissionsState.submissions.ui.page || 0;

export default {
  submissionsTotalSelector,
  submissionsSelector,
  limitedSubmissionsSelector,
  isfetched,
  getSubmissionsPage,
};
