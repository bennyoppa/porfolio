import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    innerWrapper: {
      paddingRight: 20,
      "&:hover": {
        cursor: "pointer",
      },
    },
    cardContent: {
      border: "2px solid #e5e5e5",
      borderRadius: 10,
      "&:hover": {
        transform: `translateY(-5px)`,
        boxShadow: "0 12px 17px rgb(0 0 0 / 12%)",
      },
    },
    certIcon: {
      width: "100%",
    },
    certIconWrapper: {
      padding: "5px 0",
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    cardInfo: {
      padding: "20px 0 20px 20px",
    },
    cardName: { color: "#333333" },
    cardMemberId: { color: "#777777", padding: "5px 0" },
    cardExpiry: { color: "#777777" },
  })
);

interface CertCardProps {
  card: {
    name: string;
    membershipId: string;
    expiryDate: string;
    img: string;
    url: string;
  };
}

export default function CertCard(props: CertCardProps) {
  const classes = useStyles();
  const { name, membershipId, expiryDate, img, url } = props.card;

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.innerWrapper} onClick={() => openInNewTab(url)}>
      <Grid container className={classes.cardContent}>
        <Grid item xs={3} className={classes.certIconWrapper}>
          <img src={img} alt={name} className={classes.certIcon} />
        </Grid>
        <Grid item xs={9} className={classes.cardInfo}>
          <Typography variant="h6" className={classes.cardName}>
            <b>{name}</b>
          </Typography>
          <Typography variant="body1" className={classes.cardMemberId}>
            {membershipId}
          </Typography>
          <Typography variant="body2" className={classes.cardExpiry}>
            {expiryDate}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
