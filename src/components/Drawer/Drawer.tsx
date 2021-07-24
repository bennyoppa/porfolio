import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import { links } from "../../constants/index";
import welcomeLogo from "../../assets/images/welcome.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperAnchorRight: {
      width: "70%",
      backgroundColor: "#EBDDD8",
    },
    buttonRoot: {
      backgroundColor: "#E5A1AA",
      margin: 8,
      color: "white",
      width: 150,
    },
    logo: {
      height: "25vh",
    },
  })
);

function TempDrawer(props: any) {
  const { openDrawer, onDrawerOnClose, onRedirectPage } = props;
  const classes = useStyles();

  const menuButtons = links.map((link, index) => (
    <Button
      classes={{ root: classes.buttonRoot }}
      color={link.color}
      key={index}
      onClick={() => onRedirectPage(link.url)}
    >
      {link.name}
    </Button>
  ));

  return (
    <div>
      <Drawer
        classes={{ paperAnchorRight: classes.paperAnchorRight }}
        anchor={"right"}
        open={openDrawer}
        onClose={onDrawerOnClose}
      >
        <img src={welcomeLogo} alt={"Welcome Logo"} className={classes.logo} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 32,
            alignItems: "center",
          }}
        >
          {menuButtons}
        </div>
      </Drawer>
    </div>
  );
}

export default TempDrawer;
