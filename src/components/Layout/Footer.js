import React, { PropTypes } from "react";
import Localized from "../../common/Localized";
import L from "../../locales/Layout";

const propTypes = {
  Locale: PropTypes.object.isRequired
};

const Footer = ({ Locale }) => (
  <div>
    {Locale.KEY_2}
  </div>
);

Footer.propTypes = propTypes;
export default Localized(Footer, L);
