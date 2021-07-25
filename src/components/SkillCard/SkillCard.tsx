import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      paddingBottom: 10,
    },
    cardBar: {
      height: 10,
      width: "100%",
      border: "1px solid black",
      display: "flex",
      alignItems: "center",
      padding: "0 3px",
      borderRadius: 10,
      marginTop: 5,
    },
    cardBarFilling: {
      height: 4,
      backgroundColor: "#007ced",
      borderRadius: 10,
    },
    cardName: { color: "#333333" },
    cardPercent: { color: "#888888" },
  })
);

export default function SkillCard(props: any) {
  const classes = useStyles();
  const { name, percent } = props.skill;

  return (
    <Grid container className={classes.cardContent}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="body1" className={classes.cardName}>
              <b>{name}</b>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Grid container justifyContent="flex-end">
              <Typography variant="body2" className={classes.cardPercent}>
                {percent}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.cardBar}>
        <div className={classes.cardBarFilling} style={{ width: percent }} />
      </Grid>
    </Grid>
  );
}
