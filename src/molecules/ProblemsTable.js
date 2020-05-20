import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
}));

export default function ProblemsTable(props) {
  const classes = useStyles();
  const problemLists = props.problemLists;
  const contestId = props.contestId;
  const problemUrl = `/contests/${contestId}/problems`;

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
            <TableRow key={row.problem_id} hover>
              <TableCell component="th" scope="row" align="center">
                <Link to={`${problemUrl}/${row.problem_id}`}>{row.order}</Link>
              </TableCell>
              <TableCell align="center">
                <Link to={`${problemUrl}/${row.problem_id}`}>{row.problem_name}</Link>
              </TableCell>
              <TableCell align="center">{row.time_limit}sec</TableCell>
              <TableCell align="center">{row.memory_limit}MB</TableCell>
              <TableCell align="center">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ProblemsTable.propTypes = {
  problemLists: PropTypes.array,
  contestId: PropTypes.string,
};
