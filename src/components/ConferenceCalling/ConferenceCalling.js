import React from "react";
import { Helmet } from "react-helmet";
import L from "../../locales/ConferenceCalling";
import { Hero, Section, Title } from "../Styled";

const ConferenceCalling = props => {
  L.setLanguage(props.match.params.lang);
  return (
    <div>
      <Helmet>
        <title>{L.KEY_1}</title>
      </Helmet>
      <Hero start="#2BC0E4" end="#EAECC6">
        <Title>{L.KEY_1}</Title>
      </Hero>
      <Section>
        {L.KEY_2}
      </Section>
    </div>
  );
};

export default ConferenceCalling;
