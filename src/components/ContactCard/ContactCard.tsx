import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { icons } from "../../constants/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: 40,
      height: 40,
      marginRight: theme.spacing(2),
      color: "#007ced",
      [theme.breakpoints.down("sm")]: {
        width: 30,
        height: 30,
      },
    },
    card: {
      marginBottom: 10,
    },
    detail: { alignSelf: "center" },
  })
);

export default function ContactCard(props: any) {
  const classes = useStyles();
  const { detail, contactType } = props;

  const Icon = icons.find((i) => i.label === contactType)?.icon;

  return (
    <Grid container className={classes.card}>
      <Grid item xs={1}>
        <Grid container alignItems="flex-start" justifyContent="flex-end">
          {Icon && <Icon classes={{ root: classes.icon }} />}
        </Grid>
      </Grid>
      <Grid item xs={11} className={classes.detail}>
        <Typography variant="body1" gutterBottom={true}>
          <b>{detail}</b>
        </Typography>
      </Grid>
    </Grid>
  );
}
