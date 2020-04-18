import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

import { reducer } from "../reducer";
import { request } from "../requests";
import urljoin from "url-join";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
}));

export default function RankingTable(props) {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const contestId = props.contestId || "";
  const endpoint = urljoin("/contests", contestId, "ranking");

  //const rankingList = props.rankingList;
  useEffect(() => {
    request(endpoint, dispatch);
  }, [endpoint]);

  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">順位</TableCell>
            <TableCell align="center">ユーザー名</TableCell>
            <TableCell align="center">AC/Total</TableCell>
            <TableCell align="center">得点</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(state.data).map(row => (
            <TableRow key={row.rank}>
              <TableCell align="center">{row.rank}</TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.user_id}
              </TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

RankingTable.propTypes = {
  //  rankingList: PropTypes.array
  contestId: PropTypes.string,
};
