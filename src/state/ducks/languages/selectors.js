import { createSelector } from "reselect";

const languagesSelector = state => state.languagesState.languages.data;

const isfetched = createSelector(languagesSelector, languages => languages[0] !== void 0);

export default {
  languagesSelector,
  isfetched,
};
