import React, { Component } from "react";

const Localized = (WrappedComponent, Locales) =>
  class Localized extends Component {
    constructor(props) {
      super(props);

      const lang = props.match.params.lang ? props.match.params.lang : "en";
      Locales.setLanguage(lang);
      this.state = { Locale: Locales };
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };

export default Localized;
