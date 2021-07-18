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
    menuButton: {},
    title: {
      flexGrow: 1,
    },
    toolBarRoot: {
      backgroundColor: "#DC7F8E",
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
    >
      {link.name}
    </Button>
  ));

  const redirectPageHandler = (url: string) => {
    history.push({ pathname: url });
  };

  const drawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolBarRoot }}>
          <Typography variant="h6" className={classes.title}>
            Ben.Shi
          </Typography>
          <Hidden xsDown>{menuButtons}</Hidden>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={drawerHandler}
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
