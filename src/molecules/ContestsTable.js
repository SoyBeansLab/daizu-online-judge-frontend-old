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
    height: "100%",
  },
  table: {
    minWidth: 650,
    height: "100%",
  },
}));

// 仮データ用
function createData(contestName, contestDate, contestTime, problemNumber) {
  return { contestName, contestDate, contestTime, problemNumber };
}
/*
const rows = [
  createData(props.contestName, props.contestDate, props.contestTime, props.problemNumber),
];*/

export default function DataTable(props) {
  const classes = useStyles();
  const rows = [createData(props.contestName, props.contestDate, props.contestTime, props.problemNumber)];

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
          {rows.map(rows => (
            <TableRow key={rows.contestName}>
              <TableCell component="th" scope="row">
                {rows.contestName}
              </TableCell>
              <TableCell align="center">{rows.contestDate}</TableCell>
              <TableCell align="center">{rows.contestTime}</TableCell>
              <TableCell align="center">{rows.problemNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  contestName: PropTypes.string,
  contestDate: PropTypes.string,
  contestTime: PropTypes.string,
  problemNumber: PropTypes.number,
};
