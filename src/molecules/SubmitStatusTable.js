import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
}));

// 仮データ用
function createData(submitId, userName, problemName, result, language, score, submitDate) {
  return { submitId, userName, problemName, result, language, score, submitDate };
}

export default function DataTable(props) {
  const classes = useStyles();
  const rows = [
    createData(
      props.submitId,
      props.userName,
      props.problemName,
      props.result,
      props.language,
      props.score,
      props.submitDate
    ),
  ];

  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">ユーザー名</TableCell>
            <TableCell align="center">問題名</TableCell>
            <TableCell align="center">結果</TableCell>
            <TableCell align="center">言語</TableCell>
            <TableCell align="center">得点</TableCell>
            <TableCell align="center">提出日時</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.submitId}>
              <TableCell component="th" scope="row" align="center">
                #{row.submitId}
              </TableCell>
              <TableCell align="center">{row.userName}</TableCell>
              <TableCell align="center">{row.problemName}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
              <TableCell align="center">{row.language}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">{row.submitDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  submitId: PropTypes.string,
  userName: PropTypes.string,
  problemName: PropTypes.string,
  result: PropTypes.string,
  language: PropTypes.string,
  score: PropTypes.number,
  submitDate: PropTypes.string,
};
