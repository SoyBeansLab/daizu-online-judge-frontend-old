import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Controlled as CodeMirror } from "react-codemirror2";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
  const [state, setState] = React.useState({
    codeValue: "",
    codeLanguage: "",
  });

  const languageLists = props.languageLists;
  const languageDictionary = (() => {
    var result = {};
    languageLists.forEach((element, idx) => {
      result[element] = idx;
    });
    return result;
  })();

  function handleChangeSelect(event) {
    console.log(languageDictionary);
    console.log(event.target);
    setState(oldState => ({
      ...oldState,
      codeLanguage: event.target.value,
    }));
    console.log(state);
  }

  // 提出するときの処理
  function postCode() {}

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
      <Button variant="contained" color="secondary" className={classes.button} onClick={postCode}>
        提出
      </Button>
    </div>
  );
  /* eslint-enable no-unused-vars */
}

CodeSubmit.propTypes = {
  languageLists: PropTypes.array,
};
