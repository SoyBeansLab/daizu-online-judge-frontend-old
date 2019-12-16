import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

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

export default function DataTable(props) {
  const classes = useStyles();

  const contestLists = props.contestLists;

  /* eslint-disable no-unused-vars */
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
          {contestLists.map(row => (
            <TableRow key={row.contest_id} hover component={Link} to={"/contests/" + row.contest_id}>
              <TableCell component="th" scope="row">
                {row.contest_name}
              </TableCell>
              <TableCell align="center">{row.contest_date}</TableCell>
              <TableCell align="center">{row.contest_time}</TableCell>
              <TableCell align="center">{row.problem_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
  /* eslint-disable no-unused-vars */
}

DataTable.propTypes = {
  contestLists: PropTypes.array,
};
