import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as style from './style';

const Header = () => {
  const [t, i18n] = useTranslation('global');
  const [language, setLanguage] = useState('es');
  const { ButtonLanguage, HeaderDiv } = style;
  console.log(t);

  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };
  return (
    <HeaderDiv>
      <ButtonLanguage onClick={() => onChangeLanguage()}> EN/ES</ButtonLanguage>
    </HeaderDiv>
  );
};

export default Header;
