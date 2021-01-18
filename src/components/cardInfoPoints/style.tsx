import styled from 'styled-components';

export const BodyDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c0392b;
  padding-top: 50px;
`;

export const WrapperDiv = styled.div`
  display: grid;
  border: 2px solid black;
  width: 50%;
  margin: auto;
  text-align: center;
  background-color: #f1c40f;
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
export const PData = styled.p`
  color: #34495e;
  font-weight: bold;
  font-size: 20px;
`;
