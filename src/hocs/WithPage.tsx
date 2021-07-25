import React, { Component } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles";

interface IPageProps extends WithStyles<typeof styles> {
  pageHeading: string;
}

const styles = (theme: Theme) =>
  createStyles({
    pageContainer: {
      padding: "40px 70px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 35px",
      },
    },
  });

const WithPage = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Page = withStyles(styles)(
    class extends Component<IPageProps> {
      componentDidMount() {
        document.title = `Ben Shi - ${this.props.pageHeading}`;
      }

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
