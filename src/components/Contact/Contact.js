import React, { PropTypes } from "react";
import { Helmet } from "react-helmet";
import Localized from "../../common/Localized";
import L from "../../locales/Contact";
import { Hero, Section, Title } from "../Styled";

const propTypes = {
  Locale: PropTypes.object.isRequired
};

const Contact = ({ Locale }) => (
  <div>
    <Helmet>
      <title>{Locale.KEY_1}</title>
    </Helmet>
    <Hero start="#134E5E" end="#71B280">
      <Title>{Locale.KEY_1}</Title>
    </Hero>
    <Section>
      {Locale.KEY_2}
    </Section>
  </div>
);

Contact.propTypes = propTypes;
export default Localized(Contact, L);
