import { connect } from "react-redux";

import CodeSubmitComponent from "./CodeSubmitComponent";

import { languagesOperations, languagesSelectors } from "../../state/ducks/languages";
import { submissionsOperations } from "../../state/ducks/submissions";

const mapStateToProps = state => ({
  languages: languagesSelectors.languageListSelector(state),
  languageDict: languagesSelectors.languageDictSelector(state),
  isLanguagesFetched: languagesSelectors.isfetched(state),
});

const mapDispatchToProps = {
  submit: submissionsOperations.postSubmission,
  fetchLanguages: languagesOperations,
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeSubmitComponent);
