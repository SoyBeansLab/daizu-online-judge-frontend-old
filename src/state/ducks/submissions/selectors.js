import { createSelector } from "reselect";

const submissionsSelector = state => state.submissionsState.submissions.data.submissions || {};

const submissionSelector = (state, props) => state.submissionsState.submissions.data.submission[props.submitId] || {};

const submissionsUISelector = state => state.submissionsState.submissions.ui || {};

// 特定のContestのSubmission一覧を取得する
const getSubmissionList = createSelector(submissionsSelector, submissions => Object.values(submissions));

// Submission単体を取得する.
// propsにSubmitIdが必要
const getSubmissionBySubmitId = createSelector(submissionSelector, submission => {
  const result = {
    username: submission["username"],
    submitDate: submission["submit_date"],
    problemName: submission["problem_name"],
    problemId: submission["problem_id"],
    language: submission["language"],
    score: submission["score"],
    codeSize: submission["code_size"],
    result: submission["result"],
    executeTime: submission["execute_time"],
    memory: submission["memory"],
    testCase: `${submission["all_test_case"]}/${submission["passed_test_case"]}`,
    sourceCode: submission["source_code"],
  };

  return result;
});

// paginationのpageを取得するselector
const getPage = createSelector(submissionsUISelector, ui => ui.page || 0);

// submissionsのtotalを取得するselector
const getTotal = createSelector(submissionsUISelector, ui => ui.total || 0);

export default {
  getSubmissionList,
  getSubmissionBySubmitId,
  getPage,
  getTotal,
};
