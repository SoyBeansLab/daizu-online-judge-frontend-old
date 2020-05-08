import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  chip: {
    color: "#f5f5f5",
  },
}));

function createData(key, value) {
  return { key, value };
}

export default function SubmitStatusDetail(props) {
  const classes = useStyles();

  const submitDate = props.submitDate;
  const problemName = props.problemName;
  const userName = props.userName;
  const language = props.language;
  const score = props.score;
  const result = props.result;
  const executeTime = props.executeTime;
  const memory = props.memory;
  const testCase = props.testCase;

  const chip = () => {
    if (result === "AC") {
      return <Chip color="primary" className={classes.chip} label={result} />;
    } else if (result === "WA" || result === "TLE") {
      return <Chip color="secondary" label={result} />;
    } else {
      return <Chip label={result} />;
    }
  };

  const cells = [
    createData("提出日時", submitDate),
    createData("問題", <Link href="">{problemName}</Link>),
    createData("ユーザ", <Link href="">{userName}</Link>),
    createData("言語", language),
    createData("得点", score),
    createData("テストケース通過数(通過数/全体)", testCase),
    createData("結果", chip()),
    createData("実行時間", executeTime + " ms"),
    createData("メモリ", memory + " KB"),
  ];

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <Table className={classes.table}>
          <TableBody>
            {cells.map(cell => (
              <TableRow key={cell.key}>
                <TableCell component="th" scope="row">
                  {cell.key}
                </TableCell>
                <TableCell align="center">{cell.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

SubmitStatusDetail.propTypes = {
  submitDate: PropTypes.string,
  problemName: PropTypes.string,
  userName: PropTypes.string,
  language: PropTypes.string,
  score: PropTypes.number,
  result: PropTypes.string,
  executeTime: PropTypes.number,
  memory: PropTypes.number,
  testCase: PropTypes.string,
};
