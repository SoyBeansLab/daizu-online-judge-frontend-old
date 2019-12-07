import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { reducer } from "../reducer";
import { request } from "../requests";
import urljoin from "url-join";

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
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const contestId = props.contestId;
  const endpoint = urljoin("/contests", contestId, "submits");

  //  const submitStatusLists = props.submitStatusLists;

  useEffect(() => {
    request(endpoint, dispatch);
  }, [endpoint]);

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
          {Object.values(state.data).map(row => (
            <TableRow
              key={row.submit_id}
              hover
              component={Link}
              to={urljoin("/contests", contestId, "submits", row.submit_id)}
            >
              <TableCell component="th" scope="row" align="center">
                #{row.submit_id}
              </TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.problem_name}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
              <TableCell align="center">{row.language}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">{row.submit_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  contestId: PropTypes.string
};
