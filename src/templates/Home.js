import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
//import Slider from "../organisms/Slider";
import NotSinginHome from "../organisms/NotSinginHome/NotSigninHomeComponent";
import UserProfileCard from "../organisms/UserProfileCard/UserProfileCard";
import RecentContestListCard from "../organisms/RecentContestListCard/RecentContestListCardComponent";
import NotificationCard from "../organisms/NotificationCard/NotificationCardComponent";

import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles(theme => ({
  root: {
    height: "80vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  leftContent: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2),
  },
  notifcationsCard: {
    marginTop: theme.spacing(2),
  },
}));

export default function Home(/*props*/) {
  //  const slideItemList = props.slideItemList;
  const classes = useStyles();

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className={classes.root}>
      {!isAuthenticated && <NotSinginHome loginWithRedirect={loginWithRedirect} />}
      {isAuthenticated && (
        <div className={classes.leftContent}>
          <UserProfileCard />
          <div className={classes.rightContent}>
            <RecentContestListCard />
            <NotificationCard className={classes.notifcationsCard} />
          </div>
        </div>
      )}
      {/* 寂しいので何らかのコンテンツ欲しい */}
    </div>
  );
}

Home.propTypes = {
  slideItemList: PropTypes.array,
};
