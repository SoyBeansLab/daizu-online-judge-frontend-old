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
function createData(problemId, problemName, timeLimit, memoryLimit, problemScore) {
  return { problemId, problemName, timeLimit, memoryLimit, problemScore };
}

export default function DataTable(props) {
  const classes = useStyles();
  const rows = [createData(props.problemId, props.problemName, props.timeLimit, props.memoryLimit, props.problemScore)];

  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">問題名</TableCell>
            <TableCell align="center">時間制限</TableCell>
            <TableCell align="center">メモリ制限</TableCell>
            <TableCell align="center">配点</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.problemId}>
              <TableCell component="th" scope="row" align="center">
                {row.problemId}
              </TableCell>
              <TableCell align="center">{row.problemName}</TableCell>
              <TableCell align="center">{row.timeLimit}sec</TableCell>
              <TableCell align="center">{row.memoryLimit}MB</TableCell>
              <TableCell align="center">{row.problemScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  problemId: PropTypes.string,
  problemName: PropTypes.string,
  timeLimit: PropTypes.number,
  memoryLimit: PropTypes.number,
  problemScore: PropTypes.number,
};
