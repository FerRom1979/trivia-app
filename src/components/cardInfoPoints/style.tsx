import styled from 'styled-components';
export const WrapperDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  border: 2px solid black;
  width: 50%;
  margin: auto;
  text-align: center;
  margin-top: 50px;
`;
export const Card = styled.article`
  display: grid;
  grid-template-rows: max-content 200px 1fr;
`;
export const PLink = styled.p`
  pointer-events: true;
  color: white;
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
`;
