import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(1),
  },
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

  const { notificationList, isFetched, fetchNotifications } = props;
  const style = props.className;

  useEffect(() => {
    if (!isFetched) {
      fetchNotifications("/notifications");
    }
  }, [isFetched, fetchNotifications]);

  return (
    <div className={style}>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="div">
            <Box className={classes.title} fontWeight="fontWeightBold">
              お知らせ
            </Box>

            {notificationList.map(row => (
              <div className={classes.notificationRow} key={row.notificationId}>
                <Box className={classes.notifcationDate} display="inline">
                  {row.create_date}
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
    </div>
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
  ),
  isFetched: PropTypes.bool,
  fetchNotifications: PropTypes.func,
};
