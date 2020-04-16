import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MarkDown from "@nteract/markdown";

const useStyles = makeStyles(theme => ({
  typography: {
    margin: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(1),
  },
  markdown: {
    margin: theme.spacing(1),
  },
}));

export default function ProblemInfo(props) {
  const classes = useStyles();

  const problemID = props.problemID || "";
  const problemName = props.problemName || "";
  const timeLimit = props.problemName || 120;
  const memoryLimit = props.memoryLimit || 256;
  const score = props.score || 0;
  const problemText = props.problemText || "";

  return (
    <div className="problem-info">
      <Typography className={classes.typography} variant="h3" color="primary">
        {problemID} - {problemName}
      </Typography>
      <Typography className={classes.typography} variant="subtitle1">
        実行時間制限: {timeLimit} sec / メモリ制限: {memoryLimit} MB
      </Typography>
      <Typography className={classes.typography} variant="subtitle1">
        配点: {score} 点
      </Typography>
      <Divider className={classes.divider} variant="fullwidth" />
      <MarkDown className={classes.markdown} source={problemText} />
      <Divider className={classes.divider} variant="fullwidth" />
    </div>
  );
}

ProblemInfo.propTypes = {
  problemID: PropTypes.string,
  problemName: PropTypes.string,
  timeLimit: PropTypes.number,
  memoryLimit: PropTypes.number,
  score: PropTypes.number,
  problemText: PropTypes.string,
};
