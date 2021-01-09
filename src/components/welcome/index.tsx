import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as style from './style';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { StyledWraper, Title } = style;
  const users = useSelector((state: any) => state.login.users);
  const history = useHistory();
  const [t] = useTranslation('global');

  setTimeout(() => {
    history.push('/homepage');
  }, 5000);
  return (
    <StyledWraper>
      <Title>
        ¡¡¡{users.length !== 0 ? users[0].name.toUpperCase() : `${t('welcome.title-option')}`}{' '}
        {t('welcome.title')}!!!
      </Title>
    </StyledWraper>
  );
};

export default Welcome;
