import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormLogin } from '../../types';
import * as style from './style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addDataLogin } from '../../redux/actions/index';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.users);
  const { MainDiv, LoginForm, TitleForm, WrapperDiv, InputForm, ButtonForm, SpanForm } = style;
  const [t] = useTranslation('global');

  const { register, handleSubmit, errors } = useForm<IFormLogin>();
  const onSubmit = (data: IFormLogin, e: any) => {
    const newUser = {
      name: data.name,
      email: data.email,
      age: data.age,
    };
    dispatch(addDataLogin(newUser));
    e.target.reset();
  };
  console.log(user.length);
  const test = () => {
    setTimeout(() => {
      history.push('/welcome');
    }, 1000);
  };

  return (
    <MainDiv>
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

            <ButtonForm type="submit" onClick={test}>
              {t('login.button-start')}
            </ButtonForm>

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
