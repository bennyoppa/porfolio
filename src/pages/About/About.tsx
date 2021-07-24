import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import WithPage from "../../hocs/WithPage";
import { RootContext } from "../../context/RootContext";
import IconCard from "../../components/IconCard/IconCard";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import FunFactCard from "../../components/FunFactCard/FunFactCard";

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
      borderColor: "#007ced",
      color: "black",
    },
    contactButton: {
      borderRadius: 24,
    },
    sectionTitle: {
      display: "inline-block",
      position: "relative",
      "&:before": {
        position: "absolute",
        content: '""',
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: 2,
        background: "#f5f5f5",
      },
      "&:after": {
        position: "absolute",
        content: '""',
        bottom: 0,
        left: 0,
        right: 0,
        width: "30%",
        height: 2,
        background: "#007ced",
      },
    },
    sectionTop: {
      paddingTop: 50,
    },
    cards: {
      paddingTop: 20,
    },
    carousel: {
      overflow: "hidden",
    },
    funFactCard: {
      margin: 0,
    },
  })
);

const About = () => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { title, name, bio } = value.data.pages.about.aboutMeSection;
  const { whatIDoTitle, cards } = value.data.pages.about.whatIDoSection;
  const { favouritesTitle, imageCards } = value.data.pages.about.favourites;
  const { funFactsTitle, factCards } = value.data.pages.about.funFacts;

  const downloadCVHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    window.open(CV);
  };

  return (
    <div>
      <section className="about-me-section">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
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
            <Typography variant="subtitle1" style={{ color: "#aaaaaa" }}>
              {title}
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "#333333" }}
              gutterBottom={true}
            >
              <b>{name}</b>
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#666666" }}
              paragraph={true}
            >
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
      <section className={classes.sectionTop}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.sectionTitle}>
              <b>{whatIDoTitle}</b>
            </Typography>
          </Grid>
          <Grid container className={classes.cards}>
            {cards.map((card, i) => (
              <Grid item key={i} xs={12} sm={6}>
                <IconCard
                  title={card.title}
                  content={card.content}
                  iconType={card.iconType}
                ></IconCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </section>
      <section className={classes.sectionTop}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.sectionTitle}>
              <b>{favouritesTitle}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.carousel}>
            <CardCarousel cards={imageCards} />
          </Grid>
        </Grid>
      </section>
      <section className={classes.sectionTop}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.sectionTitle}>
              <b>{funFactsTitle}</b>
            </Typography>
          </Grid>
          <Grid container>
            {factCards.map((card, i) => (
              <Grid xs={12} sm={6} md={3} item className={classes.funFactCard}>
                <FunFactCard card={card} key={i} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default WithPage(About);
