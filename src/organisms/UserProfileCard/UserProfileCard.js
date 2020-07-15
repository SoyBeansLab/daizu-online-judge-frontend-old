import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import Mascot from "../../images/soy-da-.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    margin: theme.spacing(3),
    width: "8%",
    height: "8%",
    minWidth: "177px",
    minHeight: "177px",
  },
  row: {
    marginBottom: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing(2),
  },
  content: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function UserProfileCardComponent(props) {
  const classes = useStyles();

  const iconSrc = props.iconSrc;

  return (
    <Card className={classes.root}>
      <Avatar alt="icon" className={classes.icon} src={iconSrc} />
      <CardContent>
        <Typography className={classes.row}>
          <Box className={classes.title} display="inline" fontWeight="fontWeightBold">
            username:
          </Box>
          <Box className={classes.content} display="inline">
            ucpr
          </Box>
        </Typography>

        <Typography className={classes.row}>
          <Box className={classes.title} display="inline" fontWeight="fontWeightBold">
            email:
          </Box>
          <Box className={classes.content} display="inline">
            hoge@hoge.com
          </Box>
        </Typography>

        <Typography className={classes.row}>
          <Box className={classes.title} display="inline" fontWeight="fontWeightBold">
            updated_at:
          </Box>
          <Box className={classes.content} display="inline">
            2020-07-13T15:21:10.666Z
          </Box>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

UserProfileCardComponent.propTypes = {
  iconSrc: PropTypes.string,
};

UserProfileCardComponent.defaultProps = {
  iconSrc: Mascot,
};
