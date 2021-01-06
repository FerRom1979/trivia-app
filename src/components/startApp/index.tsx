import React, { useState } from 'react';
import * as style from './styles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StartApp = () => {
  const { StyledWraper, TitleDiv, Title, SubTitle, ButtonLenguge } = style;
  const [t, i18n] = useTranslation('global');
  const [language, setLanguage] = useState('es');

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };
  return (
    <StyledWraper>
      <ButtonLenguge onClick={() => onChangeLanguage()}> EN/ES</ButtonLenguge>

      <TitleDiv>
        <Title>{t('startApp.title')}</Title>
      </TitleDiv>
      <SubTitle>
        {t('startApp.subtitle')}
        <Link to="/homepage">{t('startApp.link-login-false')}</Link> /{' '}
        <Link to="/login">{t('startApp.link-login-true')}</Link>
      </SubTitle>
    </StyledWraper>
  );
};

export default StartApp;
