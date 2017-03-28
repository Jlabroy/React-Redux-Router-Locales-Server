import React, { PropTypes } from "react";
import { Helmet } from "react-helmet";
import Localized from "../common/Localized";
import L from "../locales/Home";
import { Hero, Section, Title } from "./Styled";

const propTypes = {
  Home: PropTypes.object.isRequired,
  Locale: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const Home = ({ Locale, Home, onButtonClick }) => (
  <div>
    <Helmet>
      <title>{Locale.KEY_1}</title>
    </Helmet>
    <Hero start="#5C258D" end="#4389A2">
      <Title>{Locale.KEY_1}</Title>
    </Hero>
    <Section>
      {Locale.KEY_2}
      <p>
        {!Home.button ? Locale.KEY_3 : Locale.KEY_4}
      </p>
      <input type="button" onClick={onButtonClick} value="Button" />
    </Section>
  </div>
);

Home.propTypes = propTypes;
export default Localized(Home, L);
