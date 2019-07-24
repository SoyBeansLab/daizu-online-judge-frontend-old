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
function createData(contestName, contestDate, contestTime, problemNumber) {
  return { contestName, contestDate, contestTime, problemNumber };
}

const rows = [
  createData("てすと", "2019-01-01", "00:00-11:11", 5),
  createData("test", "2019-01-01", "00:00-11:11", 3),
  createData("test", "2019-01-01", "00:00-11:11", 7),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>コンテスト名</TableCell>
            <TableCell align="center">開催日</TableCell>
            <TableCell align="center">開催時間</TableCell>
            <TableCell align="center">問題数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.contestName}>
              <TableCell component="th" scope="row">
                {row.contestName}
              </TableCell>
              <TableCell align="center">{row.contestDate}</TableCell>
              <TableCell align="center">{row.contestTime}</TableCell>
              <TableCell align="center">{row.problemNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
