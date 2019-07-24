import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
}));

// 仮データ用
function createData(rankUserId, rankTotal, rankScore) {
  return { rankUserId, rankTotal, rankScore };
}

const rows = [
  createData("abc012", "3/10", 30),
  createData("abc012", "3/10", 30),
  createData("abc012", "3/10", 30),
  createData("abc012", "3/10", 30),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">ユーザー名</TableCell>
            <TableCell align="center">AC/Total</TableCell>
            <TableCell align="center">得点</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.rankUserId}>
              <TableCell component="th" scope="row" align="center">
                {row.rankUserId}
              </TableCell>
              <TableCell align="center">{row.rankTotal}</TableCell>
              <TableCell align="center">{row.rankScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
