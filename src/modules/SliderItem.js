import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "100%",
    minWidth: 275,
  },
});
export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0}>
      <CardContent>
        <Typography color="primary" variant="h4" m={0}>
          Title
        </Typography>
        <Typography color="textSecondary" variant="subTitle1">
          2019.07.09 16:00-17:00
        </Typography>
        <Typography variant="body2" component="p">
          Hello, World!
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">詳しくはこちらから</Button>
      </CardActions>
    </Card>
  );
}
