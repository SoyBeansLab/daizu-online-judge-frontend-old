import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
}));

// 仮データ用
function createData(submitId, submitDate, userName, problemName, result, langage, score) {
  return { submitId, submitDate, userName, problemName, result, langage, score };
}

const rows = [
  createData("000000", "2019-10-10 16:30", "hoge012", "Hello, World!", "AC", "C", 50),
  createData("000001", "2019-10-10 16:30", "hoge012", "Hello, World!", "WA", "C", 0),
  createData("000000", "2019-10-10 16:30", "hoge012", "Hello, World!", "AC", "C", 50),
  createData("000000", "2019-10-10 16:30", "hoge012", "Hello, World!", "AC", "C", 50),
  createData("000000", "2019-10-10 16:30", "hoge012", "Hello, World!", "AC", "C", 50),
];

export default function DataTable() {
  const classes = useStyles();

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
              <TableCell align="center">{row.langage}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">{row.submitDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
