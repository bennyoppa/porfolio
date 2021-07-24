import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { icons } from "../../constants/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      padding: 20,
      textAlign: "center",
      backgroundColor: "#fff",
      borderRadius: 8,
      border: "2px solid #e5e5e5",
      "&:hover": {
        transform: `translateY(-5px)`,
        boxShadow: "0 12px 17px rgb(0 0 0 / 12%)",
      },
    },
    inner: {
      padding: 15,
    },
    icon: {
      height: 50,
      width: 50,
      color: "#007ced",
    },
    count: {
      color: "#d5d5d5",
      margin: "0 10px",
    },
    title: {
      color: "#555555",
      margin: 8,
    },
  })
);

interface IFunFactCard {
  card: {
    title: string;
    count: number;
    label: string;
  };
}

export default function FunFactCard(props: IFunFactCard) {
  const classes = useStyles();
  const { title, count, label } = props.card;

  const Icon = icons.find((i) => i.label === label)?.icon;

  return (
    <div className={classes.inner}>
      <Grid container className={classes.cardContent}>
        <Grid xs={12} item>
          {Icon && <Icon className={classes.icon} />}
        </Grid>
        <Grid xs={12} item>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography variant="h3" className={classes.count}>
            {count}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
