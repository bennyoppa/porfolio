import React, { Component } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles";

import { icons } from "../../constants/index";

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      width: 44,
      height: 44,
      color: "#007ced",
    },
  });

interface IIconProps extends WithStyles<typeof styles> {
  label: string;
  customStyle?: { width?: string; color?: string };
}

class Icon extends Component<IIconProps> {
  render() {
    const { classes, label, customStyle } = this.props;

    const Icon = icons.find((i) => i.label === label.toLowerCase())
      ?.icon as React.ElementType;

    return <Icon classes={{ root: classes.icon }} style={{ ...customStyle }} />;
  }
}

export default withStyles(styles)(Icon);
