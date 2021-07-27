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
      paddingRight: 50,
      [theme.breakpoints.down("sm")]: {
        padding: 5,
      },
    },
    cardContent: {
      position: "relative",
      padding: "60px 0 30px 20px",
      backgroundColor: "#fff",
      borderLeft: "1px solid #e5e5e5",
      borderBottom: "1px solid #e5e5e5",
    },
    iconWrapper: {
      position: "absolute",
      left: -30,
      top: 25,
      backgroundColor: "white",
      [theme.breakpoints.down("sm")]: {
        left: -10,
      },
    },
    cardYear: {
      border: "2px solid #007ced",
      padding: "5px",
      borderRadius: 20,
      textAlign: "center",
      color: "#666666",
    },
    cardLocation: {
      padding: "5px 0 5px 20px",
      color: "#666666",
    },
    cardTitle: {
      padding: "15px 0 10px 0",
      color: "#333333",
    },
    cardDesc: {
      color: "#666666",
    },
  })
);

export default function EduExpCard(props: EduExpCardProps) {
  const classes = useStyles();
  const { year, location, title, description } = props.card;

  return (
    <div className={classes.innerWrapper}>
      <Grid container className={classes.cardContent}>
        <Grid container className={classes.iconWrapper}>
          <Grid item xs={3} className={classes.cardYear}>
            <Typography variant="body1">{year}</Typography>
          </Grid>
          <Grid item xs={9} className={classes.cardLocation}>
            <Typography variant="body1">{location}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.cardTitle}>
            <b>{title}</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.cardDesc}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
