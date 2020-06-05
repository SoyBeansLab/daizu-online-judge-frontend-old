import React, { useEffect } from "react";
import PropTypes from "prop-types";

import CodeSubmit from "../../molecules/CodeSubmit";

function CodeSubmitComponent(props) {
  const languageDict = props.languageDict || {};
  const languageLists = props.languages || [];
  const isLanguagesFetched = props.isLanguagesFetched || false;
  const submit = props.submit;
  const fetchLanguages = props.fetchLanguages;

  useEffect(() => {
    fetchLanguages("/languages");
  }, [isLanguagesFetched, fetchLanguages]);

  return <CodeSubmit languageLists={languageLists} languageDict={languageDict} submit={submit} />;
}

CodeSubmitComponent.propTypes = {
  languages: PropTypes.array,
  languageDict: PropTypes.object,
  isLanguagesFetched: PropTypes.bool,
  submit: PropTypes.func,
  fetchLanguages: PropTypes.func,
};

export default CodeSubmitComponent;
