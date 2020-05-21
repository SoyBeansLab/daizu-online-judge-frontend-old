import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProblemTemplate from "../templates/Problem";
import PropTypes from "prop-types";
import { languagesOperations, languagesSelectors } from "../state/ducks/languages";

const ProblemContainer = ({ languages, languageDict, isLanguagesFetched, fetchLanguages }) => {
  useEffect(() => {
    if (!isLanguagesFetched) {
      fetchLanguages("/languages");
    }
  }, [fetchLanguages, isLanguagesFetched]);

  return <ProblemTemplate languageLists={Object.values(languages)} languageDict={languageDict} />;
};

ProblemContainer.propTypes = {
  languages: PropTypes.array,
  languageDict: PropTypes.object,
  isLanguagesFetched: PropTypes.bool,
  fetchLanguages: PropTypes.func,
};

const mapStateToProps = state => ({
  languages: languagesSelectors.languageListSelector(state),
  languageDict: languagesSelectors.languageDictSelector(state),
  isLanguagesFetched: languagesSelectors.isfetched(state),
});

const mapDispatchToProps = {
  fetchLanguages: languagesOperations,
};

const Problem = connect(mapStateToProps, mapDispatchToProps)(ProblemContainer);

export default Problem;
