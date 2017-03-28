import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1em;
  color: #5E5E5E;
  margin: 0.5em 0.5em;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
