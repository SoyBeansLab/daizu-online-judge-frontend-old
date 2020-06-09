import { createSelector } from "reselect";

const problemsSelector = (state, props) => state.problemsState.problems.data[props.contestId] || {};

const isFetchedProblems = createSelector(problemsSelector, problems => problems === {});

const getProblemsById = createSelector(problemsSelector, problems => Object.values(problems || {}));

const getProblemById = createSelector(
  [problemsSelector, (_, props) => props.problemId],
  (problems, problemId) => problems[problemId] || {}
);

const isFetchedProblem = createSelector(
  [problemsSelector, (_, props) => props.problemId],
  (problems, problemId) => problems[problemId] !== void 0
);

export default {
  getProblemsById,
  getProblemById,
  isFetchedProblems,
  isFetchedProblem,
};
