import React from 'react';
import * as style from './style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StartApp = () => {
  const { StyledWraper, TitleDiv, Title, SubTitle } = style;
  const [t] = useTranslation('global');

  return (
    <StyledWraper>
      <TitleDiv>
        <Title>{t('startApp.title')}</Title>
      </TitleDiv>
      <SubTitle>
        {t('startApp.subtitle')}
        <Link to="/welcome">{t('startApp.link-login-false')}</Link> /{' '}
        <Link to="/login">{t('startApp.link-login-true')}</Link>
      </SubTitle>
    </StyledWraper>
  );
};

export default StartApp;
