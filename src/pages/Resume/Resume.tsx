import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import WithPage from "../../hocs/WithPage";
import { RootContext } from "../../context/RootContext";
import EduExpCard from "../../components/EduExpCard/EduExpCard";
import CertCard from "../../components/CertCard/CertCard";
import SkillCard from "../../components/SkillCard/SkillCard";

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
    cardGroup: {
      paddingTop: 30,
    },
    certSection: {
      paddingTop: 70,
    },
    skillSection: {
      paddingTop: 70,
    },
    skillCards: {
      padding: "30px 20px 0 0",
    },
  })
);

const Resume = () => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { heading, eduExp, certs, skills } = value.data.pages.resume;

  return (
    <div>
      <section className={classes.heading}>
        <Typography variant="h3">
          <b>{heading}</b>
        </Typography>
      </section>
      <section className={classes.eduExpSection}>
        <Grid container>
          {eduExp.map((e, i) => (
            <Grid item xs={6} key={i}>
              <Typography variant="h5" className={classes.sectionTitle}>
                <b>{e.eduExpType}</b>
              </Typography>
              <Grid container className={classes.cardGroup}>
                {e.cards.map((card, i) => (
                  <Grid item xs={12} key={i}>
                    <EduExpCard card={card} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </section>
      <section className={classes.certSection}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.sectionTitle}>
              {certs.certTitle}
            </Typography>
          </Grid>
          <Grid container className={classes.cardGroup}>
            {certs.certCards.map((card, i) => (
              <Grid item xs={6} key={i}>
                <CertCard card={card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </section>
      <section className={classes.skillSection}>
        <Grid container>
          {skills.map((s, i) => (
            <Grid item xs={6} key={i}>
              <Typography variant="h5" className={classes.sectionTitle}>
                {s.type}
              </Typography>
              <Grid container className={classes.skillCards}>
                {s.skillList.map((skill, i) => (
                  <SkillCard skill={skill} key={i} />
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default WithPage(Resume);
