import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import WithPage from "../../hocs/WithPage";
import { RootContext, IInitialState } from "../../context/RootContext";

import catLogo from "../../assets/images/cat.jpeg";
import CV from "../../assets/pdfs/Resume_Ben_Jianhui_Shi.pdf";

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

  const downloadCVHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    window.open(CV);
  };

  return (
    <RootContext.Consumer>
      {(value: IInitialState) => {
        const { title, name, bio } = value.data.pages.about;

        return (
          <div>
            <section className="about-me-section">
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={5}
                  className="about-me-section__avatar"
                >
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
                    {title}
                  </Typography>
                  <Typography variant="h4" gutterBottom={true}>
                    <b>{name}</b>
                  </Typography>
                  <Typography variant="body1" paragraph={true}>
                    {bio}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    classes={{ root: classes.cvButton }}
                    onClick={downloadCVHandler}
                  >
                    Download CV
                  </Button>
                  <Button
                    href="mailto:benny.j.shi@gmail.com"
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
      }}
    </RootContext.Consumer>
  );
};

export default WithPage(About);
