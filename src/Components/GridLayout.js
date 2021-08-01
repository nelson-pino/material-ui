import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainGridItem: {},
  secondRowFirstItem: {
    backgroundColor: "green",
  },
  secondRowSecondItem: {
    backgroundColor: "orange",
  },
  thirdFirstRowItem: {
    backgroundColor: "pink",
  },
}));

export default function GridLayout() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <Typography className={classes.mainGridItem}>Main Grid Item</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowFirstItem}>
          Second Row, First Item
        </Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowSecondItem}>
          Second Row, Second Item
        </Typography>
      </Grid>
      <Grid item sm={4} xs={4} md={4}>
        <Typography className={classes.thirdFirstRowItem}>
          Third Row, First Item
        </Typography>
      </Grid>
      <Grid item sm={4} xs={4} md={4}>
        <Typography className={classes.thirdFirstRowItem}>
          Third Row, Second Item
        </Typography>
      </Grid>
      <Grid item sm={4} xs={4} md={4}>
        <Typography className={classes.thirdFirstRowItem}>
          Third Row, Third Item
        </Typography>
      </Grid>
    </Grid>
  );
}
