import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Pagination from "../atoms/paginations";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
  paper: {
    width: "100%",
    margin: theme.spacing(1),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
}));

export default function RankingTable(props) {
  const classes = useStyles();
  const offset = props.offset || 1;
  const total = props.total || 5;
  const paginationClickHandler = props.paginationClickHandler || (() => {});
  const rankings = props.rankings || [];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
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
            {Object.values(rankings).map(row => (
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
      <Pagination offset={offset} total={total} onClick={(event, offset) => paginationClickHandler(event, offset)} />
    </div>
  );
}

RankingTable.propTypes = {
  rankingList: PropTypes.array,
  total: PropTypes.number,
  offset: PropTypes.number,
  paginationClickHandler: PropTypes.func,
  rankings: PropTypes.array,
};
