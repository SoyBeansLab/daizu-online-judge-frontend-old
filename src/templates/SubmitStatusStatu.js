import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typograhy from "@material-ui/core/Typography";
import CodeBlock from "../atoms/app-code-block";
import SubmitStatusDetailTable from "../molecules/SubmitStatusDetailTable";

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

export default function SubmitStatusStatu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typograhy variant="h5" className={classes.heading}>
        #000000
      </Typograhy>

      <Typograhy variant="h6" className={classes.text}>
        ソースコード
      </Typograhy>
      <CodeBlock language="c">#include "hoge.h"</CodeBlock>

      <Typograhy variant="h6" className={classes.text}>
        提出状況
      </Typograhy>
      <SubmitStatusDetailTable
        submitDate={new Date().toString()}
        problemName={"Summer Vacation"}
        userName={"kurokoji"}
        language={"C++17"}
        score={400}
        result={"TLE"}
        executeTime={300}
        memory={400}
      />
    </div>
  );
}
