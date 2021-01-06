import React from 'react';
import * as style from './styles';
import { Link } from 'react-router-dom';

const StartApp = () => {
  return (
    <style.StyledWraper>
      <style.TitleDiv>
        <style.Title>Bienvenidos al juego de preguntas y respuesta </style.Title>
      </style.TitleDiv>
      <style.SubTitle>
        Ingresa como <Link to="/homepage">invitado </Link> o <Link to="/login">registrate</Link>
      </style.SubTitle>
    </style.StyledWraper>
  );
};

export default StartApp;
