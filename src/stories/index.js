import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import Welcome from "./Welcome";
import Hero from "../components/Hero";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Hero")} />
));

storiesOf("Hero", module).add("with a title", () => (
  <Hero>
    <Title>
      Hello World
      <SubTitle>
        This is a subtitle.
      </SubTitle>
    </Title>
  </Hero>
));
