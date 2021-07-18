import React from "react";

import "./WithPage.scss";

interface IPageProps {}

const WithPage = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class Page extends React.Component<P & IPageProps> {
    render() {
      const { ...props } = this.props;
      return (
        <div className="page">
          <div className="page-container">
            <WrappedComponent {...(props as P)} />
          </div>
        </div>
      );
    }
  };

export default WithPage;
