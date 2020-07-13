import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ContestStatusChip from "../../atoms/Chip/ContestStatusChip";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#FFFFFF",
  },
  title: {
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(2),
  },
  contestRow: {
    marginBottom: theme.spacing(1),
  },
  contestInfo: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.2),
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    "&:hover": {
      transition: "0.5s",
      backgroundColor: "#E5E5E5",
    },
  },
  contestName: {
    marginRight: theme.spacing(2),
  },
  otherContestLink: {
    color: theme.palette.primary.dark,
    marginLeft: "auto", // 右に寄せる
  },
}));

export default function RecentContestListCardComponent(props) {
  const classes = useStyles();
  const contestList = props.contestList;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>
          <Box className={classes.title} fontWeight="fontWeightBold">
            最近のコンテスト
          </Box>
        </Typography>
        {contestList.map(row => (
          <div className={classes.contestRow} key={row.contest_id}>
            <ContestStatusChip contestStatus={row.contest_status} />
            <Link className={classes.contestInfo} display="inline" to={`/contests/${row.contest_id}`}>
              <Box className={classes.contestName} display="inline">
                {row.contest_name}
              </Box>
              <Box fontSize={12} display="inline">
                {row.contest_date.toString()}
              </Box>
            </Link>
          </div>
        ))}
      </CardContent>
      <CardActions>
        <Link className={classes.otherContestLink} to="/contests">
          他のコンテスト情報はこちら
        </Link>
      </CardActions>
    </Card>
  );
}

RecentContestListCardComponent.propTypes = {
  contestList: PropTypes.arrayOf(
    PropTypes.shape({
      contest_id: PropTypes.string,
      contest_status: PropTypes.string,
      contest_name: PropTypes.string,
      contest_date: PropTypes.object,
    })
  ).isRequired,
};
