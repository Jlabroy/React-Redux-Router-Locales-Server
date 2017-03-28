import React from "react";
import L from "../locales/Layout";
import R from "../locales/Route";
import { Header, Link } from "./Styled";

const Layout = props => {
  try {
    L.setLanguage(props.match.params.lang);
    R.setLanguage(props.match.params.lang);
  } catch (e) {}

  return (
    <div>
      <Header>
        <Link to={R.HOME.link}>{R.HOME.text}</Link>
        <Link to={R.CONFERENCE_CALL.link}>{R.CONFERENCE_CALL.text}</Link>
        <Link to={R.CONTACT.link}>{R.CONTACT.text}</Link>
      </Header>
      <main>
        {props.children}
      </main>
      <footer>
        {L.KEY_2}
      </footer>
    </div>
  );
};

export default Layout;
