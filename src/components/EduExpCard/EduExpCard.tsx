import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface EduExpCardProps {
  card: {
    year: string;
    location: string;
    title: string;
    description: string;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    innerWrapper: {
      paddingLeft: 30,
    },
    imageCardContent: {
      position: "relative",
      padding: "60px 0 60px 20px",
      backgroundColor: "#fff",
      borderLeft: "1px solid #e5e5e5",
      borderBottom: "1px solid #e5e5e5",
    },
    iconWrapper: {
      position: "absolute",
      left: -20,
      top: 25,
      backgroundColor: "white",
    },
  })
);

export default function EduExpCard(props: EduExpCardProps) {
  const classes = useStyles();
  const { year, location, title, description } = props.card;

  return (
    <div className={classes.innerWrapper}>
      <Grid container className={classes.imageCardContent}>
        <Grid container xs={12} className={classes.iconWrapper}>
          <Grid item xs={2}>
            {year}
          </Grid>
          <Grid item xs={10}>
            {location}
          </Grid>
        </Grid>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">
          <b>{description}</b>
        </Typography>
      </Grid>
    </div>
  );
}
