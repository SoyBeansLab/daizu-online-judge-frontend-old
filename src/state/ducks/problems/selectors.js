import { createSelector } from "reselect";

const problemSelector = (state, props) => state.problemsState.problems.entities.problems[props.problemId] || {};

const getProblemById = createSelector(problemSelector, problem => problem);

export default {
  getProblemById,
};
