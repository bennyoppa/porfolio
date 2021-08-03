import React, { useRef, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Icon from "../Icon/Icon";

const useStyles = makeStyles(() =>
  createStyles({
    imageCardContainer: {
      marginLeft: 20,
      paddingTop: 20,
      flexWrap: "nowrap",
      transitionDuration: "0.5s",
    },
    imageCardContent: {
      position: "relative",
      padding: "0 0 0 60px",
      backgroundColor: "#fff",
      borderRadius: 8,
      border: "2px solid #e5e5e5",
    },
    iconWrapper: {
      position: "absolute",
      left: -20,
      top: -20,
      backgroundColor: "white",
    },
    content: {
      margin: "0 0 10px",
      color: "#666666",
    },
    title: {
      margin: "0 0 2px",
      color: "#333333",
    },
    subtitle: {
      color: "#BBBBBB",
    },
    inner: {
      padding: 20,
      flexShrink: 0,
    },
    textSection: {
      padding: "30px 0",
    },
    background: {
      backgroundSize: "cover",
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(270deg, transparent 80%, white 100%)`,
      },
    },
  })
);

interface ICardCarousel {
  cards: {
    title: string;
    content: string;
    subtitle: string;
    background: string;
  }[];
}

export default function CardCarousel(props: ICardCarousel) {
  const { cards } = props;
  const classes = useStyles();
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState("0px");
  const totalCard = cards.length;

  const prevCardHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const cardWidth = cardRef.current?.clientWidth || 200;

    if (currentIndex !== 0) {
      setTranslateX(`${parseInt(translateX) + cardWidth}px`);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextCardHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const cardWidth = cardRef.current?.clientWidth || 200;

    if (currentIndex < totalCard - 1) {
      setTranslateX(`${parseInt(translateX) - cardWidth}px`);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <Grid
        container
        className={classes.imageCardContainer}
        style={{ transform: `translateX(${translateX})` }}
      >
        {cards.map((card, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            className={classes.inner}
            ref={cardRef}
          >
            <div className={classes.imageCardContent}>
              <div className={classes.iconWrapper}>
                <Icon label={card.subtitle} />
              </div>
              <Grid container>
                <Grid item xs={12} lg={4} className={classes.textSection}>
                  <Typography variant="body1" className={classes.content}>
                    {card.content}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.title}>
                    <b>{card.title}</b>
                  </Typography>
                  <Typography variant="subtitle2" className={classes.subtitle}>
                    {card.subtitle}
                  </Typography>
                </Grid>
                <Grid
                  item
                  lg={8}
                  className={classes.background}
                  style={{
                    backgroundImage: `url(${card.background})`,
                  }}
                ></Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        <Button onClick={prevCardHandler}>____</Button>
        <Button onClick={nextCardHandler}>____</Button>
      </Grid>
    </>
  );
}
