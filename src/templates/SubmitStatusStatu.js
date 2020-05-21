import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typograhy from "@material-ui/core/Typography";
import CodeBlock from "../atoms/CodeBlock";
import { useParams } from "react-router-dom";
import SubmissionDetails from "../organisms/SubmissionDetails";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  text: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(2),
  },
}));

const submitStatusStateTestData = {
  submitId: "123456",
  submitDate: "2019-05-05",
  problemName: "Douteki keikaku plan",
  language: "C++",
  score: 100,
  codeLength: 100,
  result: "AC",
  userName: "nemu_sou",
  executeTime: 300,
  memory: 400,
  sourceCode: 'printf("HelloWorld");',
};

export default function SubmitStatusState() {
  const classes = useStyles();
  const { submitId } = useParams();

  return (
    <div className={classes.root}>
      <Typograhy variant="h5" className={classes.heading}>
        #{submitId}
      </Typograhy>

      <Typograhy variant="h6" className={classes.text}>
        ソースコード
      </Typograhy>
      <CodeBlock language="c">{submitStatusStateTestData.sourceCode}</CodeBlock>

      <Typograhy variant="h6" className={classes.text}>
        提出状況
      </Typograhy>

      <SubmissionDetails submitId={submitId} />
    </div>
  );
}
