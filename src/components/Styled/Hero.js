import styled from "styled-components";

const Hero = styled.section`
  box-sizing: border-box;
  padding-top: 80px;
  width: 100%;
  height: 33.438em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${props => props.start ? props.start : "#4CA1AF"};
  background: -webkit-linear-gradient(to left, ${props => props.start ? props.start : "#4CA1AF"} , ${props => props.end ? props.end : "#C4E0E5"});
  background: linear-gradient(to left, ${props => props.start ? props.start : "#4CA1AF"} , ${props => props.end ? props.end : "#C4E0E5"});
  transition: 0.2s all ease-in-out;
`;

export default Hero;
