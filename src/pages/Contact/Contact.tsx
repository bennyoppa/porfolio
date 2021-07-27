import React, { Fragment, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import { RootContext } from "../../context/RootContext";
import WithPage from "../../hocs/WithPage";
import ContactCard from "../../components/ContactCard/ContactCard";
import Icon from "../../components/Icon/Icon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: "65px 0",
      backgroundColor: "#fcfcfc",
      borderTop: "2px solid #eee",
      borderBottom: "2px solid #eee",
      [theme.breakpoints.down("sm")]: {
        padding: "25px 0",
      },
    },
    contacts: {
      paddingTop: 50,
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 40,
      },
    },
    footer: {
      marginTop: 50,
      padding: "5px 0",
      backgroundColor: "#fcfcfc",
      borderTop: "2px solid #eee",
      borderBottom: "2px solid #eee",
    },
    shortcutWrapper: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  })
);

const customIconStyle = { width: "30px", color: "black" };

const Contact = (props: any) => {
  const classes = useStyles();
  const value = useContext(RootContext);
  const { heading, contactMethods, shortcuts } = value.data.pages.contact;

  const shortcutHandler = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Fragment>
      <section className={classes.heading}>
        <Hidden smDown>
          <Typography variant="h3">
            <b>{heading}</b>
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h5">
            <b>{heading}</b>
          </Typography>
        </Hidden>
      </section>
      <Grid container className={classes.contacts}>
        {contactMethods.map((c, i) => (
          <Grid item xs={12} key={i}>
            <ContactCard
              detail={c.detail}
              contactType={c.contactType}
            ></ContactCard>
          </Grid>
        ))}
      </Grid>
      <section className={classes.footer}>
        <Grid container justifyContent="flex-end">
          {shortcuts.map((s, i) => (
            <Grid
              item
              key={i}
              xs={2}
              sm={1}
              onClick={() => shortcutHandler(s.url)}
              className={classes.shortcutWrapper}
            >
              <Icon label={s.shortcutType} customStyle={customIconStyle} />
            </Grid>
          ))}
        </Grid>
      </section>
    </Fragment>
  );
};

export default WithPage(Contact);
