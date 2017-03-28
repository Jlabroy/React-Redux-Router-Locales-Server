import React, { PropTypes } from "react";
import Localized from "../../common/Localized";
import L from "../../locales/Route";
import { Header as StyledHeader, Link } from "../../Styled";

const propTypes = {
  Locale: PropTypes.object.isRequired
};

const Header = ({ Locale }) => (
  <StyledHeader>
    <Link to={Locale.HOME.link}>{Locale.HOME.text}</Link>
    <Link to={Locale.CONFERENCE_CALL.link}>{Locale.CONFERENCE_CALL.text}</Link>
    <Link to={Locale.CONTACT.link}>{Locale.CONTACT.text}</Link>
  </StyledHeader>
);

Header.propTypes = propTypes;
export default Localized(Header, L);
