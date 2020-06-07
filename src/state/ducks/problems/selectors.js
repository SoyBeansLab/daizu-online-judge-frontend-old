import { createSelector } from "reselect";

const problemsSelector = (state, props) => state.problemsState.problems.data[props.contestId] || {};

const getProblemsById = createSelector(problemsSelector, problems => Object.values(problems || {}));

const getProblemById = createSelector(
  [problemsSelector, (_, props) => props.problemId],
  (problems, problemId) => problems[problemId] || {}
);

export default {
  getProblemsById,
  getProblemById,
};
