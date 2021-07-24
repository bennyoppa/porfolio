import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

import { links } from "../../constants/index";
import Drawer from "../Drawer/Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color: "black",
    },
    toolBarRoot: {
      backgroundColor: "white",
      height: 110,
      borderRadius: 40,
      border: "white",
    },
    appBar: {
      boxShadow: "none",
      borderRadius: 40,
      backgroundColor: "white",
      padding: "0 20px",
    },
    button: {
      color: "#333333",
      "&:hover": {
        backgroundColor: "rgba(600, 0, 0, 0.04)",
      },
    },
  })
);

function NavBar(props: any) {
  const classes = useStyles();
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuButtons = links.map((link, index) => (
    <Button
      color={link.color}
      key={index}
      onClick={() => redirectPageHandler(link.url)}
      classes={{ root: classes.button }}
    >
      {link.name}
    </Button>
  ));

  const redirectPageHandler = (url: string) => {
    history.push({ pathname: url });
    setOpenDrawer(false);
  };

  const drawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar classes={{ root: classes.toolBarRoot }}>
          <Typography variant="h6" className={classes.title}>
            <b>Ben</b> Shi
          </Typography>
          <Hidden xsDown>{menuButtons}</Hidden>
          <Hidden smUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={drawerHandler}
              style={{ color: "#333333" }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Drawer
            openDrawer={openDrawer}
            onDrawerOnClose={drawerHandler}
            onRedirectPage={redirectPageHandler}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
