import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import catLogo from "../../images/cat.jpeg";

import "./About.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: 200,
      height: 200,
      display: "flex",
      margin: "auto",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    bio: {},
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <section className="about-me-section">
        <div className="about-me-section__avatar">
          <Avatar className={classes.avatar} alt="Me" src={catLogo} />
        </div>
        <div className="about-me-section__content">
          <Typography variant="body1" className={classes.bio}>
            Hi, I'm a new front-end developer.
          </Typography>
        </div>
      </section>
    </div>
  );
}
