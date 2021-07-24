import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import WithPage from "../../hocs/WithPage";
import { RootContext } from "../../context/RootContext";
import EduExpCard from "../../components/EduExpCard/EduExpCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: "65px 70px",
      backgroundColor: "#fcfcfc",
      borderTop: "2px solid #eee",
      borderBottom: "2px solid #eee",
    },
    eduExpSection: {
      paddingTop: 70,
    },
    eduExpTitle: {
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
        background: "grey",
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
    eduExpCards: {
      paddingTop: 30,
    },
  })
);

const Resume = () => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { heading } = value.data.pages.resume;
  const { eduTitle, eduCards } = value.data.pages.resume.education;
  const { expTitle, expCards } = value.data.pages.resume.experience;

  return (
    <div>
      <section className={classes.heading}>
        <Typography variant="h3">
          <b>{heading}</b>
        </Typography>
      </section>
      <section className={classes.eduExpSection}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.eduExpTitle}>
              <b>{eduTitle}</b>
            </Typography>
            <Grid container className={classes.eduExpCards}>
              {eduCards.map((card, i) => (
                <Grid item xs={12} key={i}>
                  <EduExpCard card={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.eduExpTitle}>
              <b>{expTitle}</b>
            </Typography>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default WithPage(Resume);
