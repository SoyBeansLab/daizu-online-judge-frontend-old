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
    width: "100%"
  },
  table: {
    minWidth: 650
  }
}));

export default function DataTable(props) {
  const classes = useStyles();
  const problemLists = props.problemLists;

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
          {problemLists.map(row => (
            <TableRow key={row.problem_id}>
              <TableCell component="th" scope="row" align="center">
                {row.problem_id}
              </TableCell>
              <TableCell align="center">{row.problem_name}</TableCell>
              <TableCell align="center">{row.time_limit}sec</TableCell>
              <TableCell align="center">{row.memory_limit}MB</TableCell>
              <TableCell align="center">{row.problem_score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  problemLists: PropTypes.array
};
