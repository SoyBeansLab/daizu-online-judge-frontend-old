import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(2),
  },
  notificationRow: {
    marginBottom: theme.spacing(1),
    "&:hover": {
      transition: "0.5s",
      backgroundColor: "#E5E5E5",
    },
  },
  notifcationDate: {
    color: theme.palette.primary.dark,
  },
  description: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  otherNoticationsLink: {
    color: theme.palette.primary.dark,
    marginLeft: "auto",
  },
}));

export default function NotificationCardComponent(props) {
  const classes = useStyles();

  //  const notificationList = props.notificationList;

  const notificationList = [
    {
      notificationId: "#hogehoge1",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
    {
      notificationId: "#hogehoge2",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
    {
      notificationId: "#hogehoge3",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
    {
      notificationId: "#hogehoge4",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
    {
      notificationId: "#hogehoge5",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
  ];

  const style = props.className;

  return (
    <Card className={style}>
      <CardContent>
        <Typography component="div">
          <Box className={classes.title} fontWeight="fontWeightBold">
            お知らせ
          </Box>

          {notificationList.map(row => (
            <div className={classes.notificationRow} key={row.notificationId}>
              <Box className={classes.notifcationDate} display="inline">
                {row.date}
              </Box>
              <Box className={classes.description} display="inline">
                {row.description}
              </Box>
            </div>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.otherNoticationsLink} to="/notifications">
          他のお知らせ情報はこちら
        </Link>
      </CardActions>
    </Card>
  );
}

NotificationCardComponent.propTypes = {
  className: PropTypes.string,
  notificationList: PropTypes.arrayOf(
    PropTypes.shape({
      notificationId: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
