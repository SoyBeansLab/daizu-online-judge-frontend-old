import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Controlled as CodeMirror } from "react-codemirror2";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { useAuth0 } from "@auth0/auth0-react";

require("codemirror/lib/codemirror.css");
require("codemirror/mode/clike/clike");
require("codemirror/mode/python/python");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  button: {
    margin: theme.spacing(1),
  },
  codemirror: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CodeSubmit(props) {
  const classes = useStyles();
  const { contestId, problemId } = useParams();
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState({
    codeValue: "",
    codeLanguage: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const languageLists = props.languageLists;
  const languageDictionary = props.languageDict;
  const submit = props.submit;

  const isInputed = () => {
    return state.codeLanguage !== "" && state.codeValue !== "";
  };

  function handleChangeSelect(event) {
    //    console.log(languageDictionary);
    //    console.log(event.target);
    setState(oldState => ({
      ...oldState,
      codeLanguage: event.target.value,
    }));
    //    console.log(state);
  }

  // 提出するときの処理
  async function postCode() {
    const payload = {
      language: state.codeLanguage,
      code: state.codeValue,
      contestId: contestId,
      problemId: problemId,
    };
    const token = await getAccessTokenSilently();
    submit(`/contests/${contestId}/submits`, token, payload);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    console.log(isSubmitted);
    return (
      <Redirect
        to={{
          pathname: `/contests/${contestId}`,
          search: "?tab=submits",
        }}
      />
    );
  }

  /* eslint-disable no-unused-vars */
  return (
    <div>
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel>Language</InputLabel>
          <Select value={state.codeLanguage} onChange={handleChangeSelect}>
            {languageLists.map((language, idx) => {
              return (
                <MenuItem key={idx} value={language}>
                  {" "}
                  {language}{" "}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </form>
      <CodeMirror
        value={state.codeValue}
        options={{
          mode: `${languageDictionary[state.codeLanguage]}`,
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setState(oldState => ({
            ...oldState,
            codeValue: value,
          }));
        }}
        className={classes.codemirror}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        disabled={!isInputed()}
        onClick={async () => {
          await postCode();
        }}
      >
        提出
      </Button>
    </div>
  );
  /* eslint-enable no-unused-vars */
}

CodeSubmit.propTypes = {
  languageLists: PropTypes.array.isRequired,
  languageDict: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
};
