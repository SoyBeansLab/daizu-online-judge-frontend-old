import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Pagination from "../atoms/Paginations";

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
  chip: {
    color: "#f5f5f5",
  },
}));

export default function SubmitStatusTable(props) {
  const classes = useStyles();
  const contestId = props.contestId || "";
  const submissions = props.submissions || [];
  const total = props.submissionsTotal || 10;
  const offset = props.offset || 1;
  const paginationClickHandler = props.paginationClickHandler || (() => {});

  const chip = result => {
    if (result === "AC") {
      return <Chip color="primary" className={classes.chip} label={result} />;
    } else if (result === "WA" || result === "TLE") {
      return <Chip color="secondary" label={result} />;
    } else {
      return <Chip label={result} />;
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
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
            {submissions.map(row => (
              <TableRow key={row.submit_id} hover>
                <TableCell component="th" scope="row" align="center">
                  <Link to={`/contests/${contestId}/submits/${row.submit_id}`}>#{row.submit_id}</Link>
                </TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.problem_name}</TableCell>
                <TableCell align="center">{chip(row.result)}</TableCell>
                <TableCell align="center">{row.language}</TableCell>
                <TableCell align="center">{row.score}</TableCell>
                <TableCell align="center">{row.submit_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Pagination offset={offset} total={total} onClick={(event, offset) => paginationClickHandler(event, offset)} />
    </div>
  );
}

SubmitStatusTable.propTypes = {
  contestId: PropTypes.string,
  submissions: PropTypes.array,
  submissionsTotal: PropTypes.number,
  paginationClickHandler: PropTypes.func,
  offset: PropTypes.number,
};
