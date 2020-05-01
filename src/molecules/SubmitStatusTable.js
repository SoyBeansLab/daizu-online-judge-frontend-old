import React, { useEffect } from "react";
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

//import { reducer } from "../reducer";
//import { request } from "../requests";
import urljoin from "url-join";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
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
  //const [state, dispatch] = useReducer(reducer, { loading: true, data: [] });
  const contestId = props.contestId || "";
  //const endpoint = urljoin("/contests", contestId, "submits");
  const submissions = props.submissions || [];

  //  const submitStatusLists = props.submitStatusLists;

  const chip = result => {
    if (result === "AC") {
      return <Chip color="primary" className={classes.chip} label={result} />;
    } else if (result === "WA" || result === "TLE") {
      return <Chip color="secondary" label={result} />;
    } else {
      return <Chip label={result} />;
    }
  };

  useEffect(() => {
    //  request(endpoint, dispatch);
  }, []);

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
          {submissions.map(row => (
            <TableRow key={row.submit_id} hover>
              <TableCell component="th" scope="row" align="center">
                <Link to={urljoin("/contests", contestId, "submits", row.submit_id || "")}>#{row.submit_id}</Link>
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
  );
}

SubmitStatusTable.propTypes = {
  contestId: PropTypes.string,
  submissions: PropTypes.array,
  submissionsTotal: PropTypes.number,
};
