import React, { useRef, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    imageCardContainer: {
      paddingTop: 40,
      flexWrap: "nowrap",
      transitionDuration: "0.5s",
    },
    imageCardContent: {
      position: "relative",
      padding: "30px 20px 20px 60px",
      backgroundColor: "#fff",
      borderRadius: 8,
      border: "2px solid #e5e5e5",
    },
    imageCardAvatar: {
      position: "absolute",
      width: 70,
      height: 70,
      left: -35,
      top: -35,
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
  })
);

interface ICardCarousel {
  cards: {
    title: string;
    content: string;
    subtitle: string;
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
          <Grid item xs={12} sm={6} className={classes.inner}>
            <Grid key={i} className={classes.imageCardContent} ref={cardRef}>
              <Avatar className={classes.imageCardAvatar} />
              <Typography variant="body1" className={classes.content}>
                {card.content}
              </Typography>
              <Typography variant="subtitle1" className={classes.title}>
                {card.title}
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                {card.subtitle}
              </Typography>
            </Grid>
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
