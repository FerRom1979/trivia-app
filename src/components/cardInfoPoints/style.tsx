import styled from 'styled-components';
export const WrapperDiv = styled.div`
  display: grid;
  /* grid-gap: 20px; */
  border: 2px solid black;
  width: 50%;
  margin: auto;
  text-align: center;
  margin-top: 50px;
`;
export const Card = styled.article`
  display: grid;
`;
export const ButtonLink = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;
export const SpanLink = styled.span`
  pointer-events: true;
  color: white;
  font-weight: bold;
  padding: 0;
  margin: 10px;
`;
export const Header = styled.header`
  background-color: black;
  color: white;
`;
export const DivLink = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-around;
  padding: 10px;
`;
