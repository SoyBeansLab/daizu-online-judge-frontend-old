import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  code: {
    background: "#e0e0e0",
    overflow: "hidden",
    borderRadius: "8px",
  },
}));

export default function CodeBlock(props) {
  const classes = useStyles();

  return (
    <div>
      <pre>
        <SyntaxHighlighter language={props.language} className={classes.code}>
          {props.children}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  children: PropTypes.node.isRequired,
};
