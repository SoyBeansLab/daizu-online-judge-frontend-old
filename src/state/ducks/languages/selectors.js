import { createSelector } from "reselect";

const languagesSelector = state => state.languagesState.languages.data || [];

const languageListSelector = createSelector(languagesSelector, languages => Object.keys(languages));

const languageDictSelector = createSelector(languagesSelector, languages => languages);

const isFetched = createSelector(languagesSelector, languages => Object.keys(languages).length !== 0);

export default {
  languageListSelector,
  languageDictSelector,
  isFetched,
};
