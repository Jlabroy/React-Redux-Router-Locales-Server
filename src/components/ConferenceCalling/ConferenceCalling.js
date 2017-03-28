import React, { PropTypes } from "react";
import { Helmet } from "react-helmet";
import Localized from "../../common/Localized";
import L from "../../locales/ConferenceCalling";
import { Hero, Section, Title } from "../Styled";

const propTypes = {
  Locale: PropTypes.object.isRequired
};

const ConferenceCalling = ({ Locale }) => (
  <div>
    <Helmet>
      <title>{Locale.KEY_1}</title>
    </Helmet>
    <Hero start="#2BC0E4" end="#EAECC6">
      <Title>{Locale.KEY_1}</Title>
    </Hero>
    <Section>
      {Locale.KEY_2}
    </Section>
  </div>
);

ConferenceCalling.propTypes = propTypes;
export default Localized(ConferenceCalling, L);
