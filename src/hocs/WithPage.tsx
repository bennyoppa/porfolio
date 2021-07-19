import React, { Component } from "react";
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";

interface IPageProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    pageContainer: {
      padding: "40px 70px 60px",
      [theme.breakpoints.down("sm")]: {
        padding: "5px 20px 10px",
      },
    },
  });

const WithPage = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Page = withStyles(styles)(
    class extends Component<IPageProps> {
      render() {
        const { classes, ...props } = this.props;

        return (
          <div className="page">
            <div className={classes.pageContainer}>
              <WrappedComponent {...(props as P)} />
            </div>
          </div>
        );
      }
    }
  );

  return Page;
};

export default WithPage;
