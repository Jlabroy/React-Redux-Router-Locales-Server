import React, { Component } from "react";

const Localized = (WrappedComponent, Locales) =>
  class Localized extends Component {
    constructor(props) {
      super(props);

      Locales.setLanguage(props.match.params.lang);
      this.state = { Locale: Locales };
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };

export default Localized;
