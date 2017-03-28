import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Hero, Section, SubTitle, Title } from "./Styled";

const Index = props => {
  return (
    <div>
      <Helmet>
        <title>Welcome to International Sites</title>
      </Helmet>
      <Hero>
        <Title>
          Welcome to international sites
          <SubTitle>Click the language you want to use below.</SubTitle>
        </Title>
      </Hero>
      <Section>
        <ul>
          <li><Link to="/en">English</Link></li>
          <li><Link to="/fr">French</Link></li>
        </ul>
      </Section>
    </div>
  );
};

export default Index;
