import React from 'react';
import * as style from './styles';
import { Link } from 'react-router-dom';

const StartApp = () => {
  const { StyledWraper, TitleDiv, Title, SubTitle } = style;
  return (
    <StyledWraper>
      <TitleDiv>
        <Title>Bienvenidos al juego de preguntas y respuesta </Title>
      </TitleDiv>
      <SubTitle>
        Ingresa como <Link to="/homepage">invitado </Link> o <Link to="/login">registrate</Link>
      </SubTitle>
    </StyledWraper>
  );
};

export default StartApp;
