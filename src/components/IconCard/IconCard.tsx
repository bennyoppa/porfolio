import React, { Component } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { icons } from "../../constants/index";

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      width: 44,
      height: 44,
      marginRight: theme.spacing(2),
    },
    cardContent: {
      wordBreak: "break-all",
    },
  });

interface IIconCardProps extends WithStyles<typeof styles> {
  title: string;
  content: string;
  iconType: string;
}

class IconCard extends Component<IIconCardProps> {
  render() {
    const { classes, title, content, iconType } = this.props;

    const Icon = icons.find((i) => i.label === iconType)?.icon;

    return (
      <Grid container>
        <Grid item xs={3}>
          <Grid container alignItems="flex-start" justifyContent="flex-end">
            {Icon && <Icon classes={{ root: classes.icon }} color="primary" />}
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" color="primary" gutterBottom={true}>
            <b>{title}</b>
          </Typography>
          <Typography
            variant="body1"
            classes={{ root: classes.cardContent }}
            paragraph={true}
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(IconCard);
