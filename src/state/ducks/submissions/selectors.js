import { createSelector } from "reselect";

const submissionsSelector = (state, props) => {
  const submissions = state.submissionsState.submissions.data.submissions[props.contestId] || {};
  return submissions[props.page] || [];
};

const submissionSelector = (state, props) =>
  state.submissionsState.submissions.data[props.contestId][props.submitId] || {};

const submissionPageSelector = (state, props) => state.submissionsState.submissions.pages[props.contestId] || {};

const isfetched = createSelector(submissionsSelector, submissions => submissions.upcoming !== void 0);

// 特定のContestのSubmission一覧を取得する
// propsにContestIdとPage(cursol)が必要
const getSubmissionsByContestId = createSelector(submissionsSelector, submissions => Object.values(submissions));

// Submission単体を取得する.
// propsにSubmitIdが必要
const getSubmissionsBySubmitId = createSelector(submissionSelector, submission => submission);

// paginationのpageを取得するselector
const getPageByContestId = createSelector(submissionPageSelector, page => page.page || 0);

// submissionsのtotalを取得するselector
// propsにContestIdが必要
const getTotalByContestId = createSelector(submissionPageSelector, page => page.total || 0);

export default {
  isfetched,
  getSubmissionsByContestId,
  getSubmissionsBySubmitId,
  getPageByContestId,
  getTotalByContestId,
};
