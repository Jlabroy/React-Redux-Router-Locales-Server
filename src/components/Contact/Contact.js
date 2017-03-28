import React from "react";
import { Helmet } from "react-helmet";
import L from "../../locales/Contact";
import { Hero, Section, Title } from "../Styled";

const Contact = props => {
  L.setLanguage(props.match.params.lang);
  return (
    <div>
      <Helmet>
        <title>{L.KEY_1}</title>
      </Helmet>
      <Hero start="#134E5E" end="#71B280">
        <Title>{L.KEY_1}</Title>
      </Hero>
      <Section>
        {L.KEY_2}
      </Section>
    </div>
  );
};

export default Contact;
