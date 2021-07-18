import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import catLogo from "../../images/cat.jpeg";
import WithPage from "../../hocs/WithPage";

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
    cvButton: {
      marginRight: theme.spacing(2),
      borderRadius: 24,
    },
    contactButton: {
      borderRadius: 24,
    },
  })
);

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <section className="about-me-section">
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6} lg={5} className="about-me-section__avatar">
            <Avatar className={classes.avatar} alt="Me" src={catLogo} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={7}
            className="about-me-section__content"
          >
            <Typography variant="subtitle1" color="textSecondary">
              Front-end Developer
            </Typography>
            <Typography variant="h4" gutterBottom={true}>
              <b>Ben Shi</b>
            </Typography>
            <Typography variant="body1" paragraph={true}>
              Hi, I'm a new and passionate front-end developer.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              classes={{ root: classes.cvButton }}
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              classes={{ root: classes.contactButton }}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default WithPage(About);
