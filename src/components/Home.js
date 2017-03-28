import React from "react";
import { Helmet } from "react-helmet";
import L from "../locales/Home";
import { Hero, Section, Title } from "./Styled";

const Home = props => {
  L.setLanguage(props.match.params.lang);
  return (
    <div>
      <Helmet>
        <title>{L.KEY_1}</title>
      </Helmet>
      <Hero start="#5C258D" end="#4389A2">
        <Title>{L.KEY_1}</Title>
      </Hero>
      <Section>
        {L.KEY_2}
        <p>
          {!props.Home.button ? L.KEY_3 : L.KEY_4}
        </p>
        <input type="button" onClick={props.onButtonClick} value="Button" />
      </Section>
    </div>
  );
};

export default Home;
