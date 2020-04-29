import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ProblemTemplate from "../templates/Problem";
import PropTypes from "prop-types";
import { reducer } from "../reducer";
import { request } from "../requests";
import urljoin from "url-join";
import { languagesOperations, languagesSelectors } from "../state/ducks/languages";

const ProblemContainer = ({ languages, isLanguagesFetched, fetchLanguages }) => {
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const { contestId, problemId } = useParams();
  const endpoint = urljoin("/contests", contestId, "/problems", problemId);

  useEffect(() => {
    request(endpoint, dispatch);
    if (!isLanguagesFetched) {
      fetchLanguages("/languages");
    }
  }, [fetchLanguages, isLanguagesFetched, endpoint]);

  return (
    <ProblemTemplate
      problemId={state.data.problem_id}
      problemName={state.data.problem_name}
      timeLimit={state.data.time_limit}
      memoryLimit={state.data.memory_limit}
      score={state.data.score}
      problemText={state.data.problem_detail}
      languageLists={Object.values(languages)}
    />
  );
};

ProblemContainer.propTypes = {
  languages: PropTypes.array,
  isLanguagesFetched: PropTypes.bool,
  fetchLanguages: PropTypes.func,
};

const mapStateToProps = state => ({
  languages: languagesSelectors.languagesSelector(state),
  isLanguagesFetched: languagesSelectors.isfetched(state),
});

const mapDispatchToProps = {
  fetchLanguages: languagesOperations,
};

const Problem = connect(mapStateToProps, mapDispatchToProps)(ProblemContainer);

export default Problem;
