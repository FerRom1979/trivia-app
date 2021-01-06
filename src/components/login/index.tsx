import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormLogin } from '../../types';
import * as style from './style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const {
    MainDiv,
    LoginForm,
    TitleForm,
    WrapperDiv,
    InputForm,
    ButtonForm,
    SpanForm,
    ButtonLenguge,
  } = style;
  const [t, i18n] = useTranslation('global');
  const [language, setLanguage] = useState('es');
  const { register, handleSubmit, errors } = useForm<IFormLogin>();
  const onSubmit = (data: object, e: any) => {
    console.log(data);
    e.target.reset();
  };
  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };

  return (
    <MainDiv>
      <ButtonLenguge onClick={() => onChangeLanguage()}> EN/ES</ButtonLenguge>
      <WrapperDiv>
        <div>
          <TitleForm>{t('login.title-form')}</TitleForm>
        </div>
        <div>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              type="text"
              name="name"
              placeholder={t('login.input-name')}
              ref={register({ required: true })}
            />
            {errors.messageRequired && <span>{t('login.message-error')}</span>}
            <InputForm
              type="email"
              name="email"
              placeholder={t('login.input-email')}
              ref={register({ required: true })}
            />
            {errors.messageRequired && <span>{t('login.message-error')}</span>}
            <InputForm
              type="number"
              name="age"
              placeholder={t('login.input-age')}
              ref={register({ required: true })}
            />
            {errors.messageRequired && <span>{t('login.message-error')}</span>}
            <ButtonForm type="submit">{t('login.button-start')}</ButtonForm>
            <Link to="/">
              <SpanForm>{t('login.link-back')}</SpanForm>
            </Link>
          </LoginForm>
        </div>
      </WrapperDiv>
    </MainDiv>
  );
};

export default Login;
