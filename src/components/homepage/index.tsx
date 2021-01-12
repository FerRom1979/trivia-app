import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormQuestions } from '../../types';
import * as style from './style';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { addDataApi } from '../../redux/actions/index';
import { useHistory } from 'react-router-dom';

const Hompage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataApi = useSelector((state: any) => state.api.data.results);
  const [t] = useTranslation('global');
  const {
    WrapperDiv,
    FormControl,
    InputForm,
    DivMenssage,
    PMenssage,
    SelectForm,
    SpanForm,
    ButtonForm,
    SpanMessageError,
  } = style;
  const { register, handleSubmit, errors } = useForm<IFormQuestions>();
  const onSubmit = (data: IFormQuestions, e: any) => {
    console.log(data);

    const amount = data.questions;
    const difficulty = data.difficulty;
    const typeform = data.type;
    dispatch(addDataApi(amount, difficulty, typeform));

    e.target.reset();
  };
  console.log(dataApi);
  if (dataApi !== undefined)
    setTimeout(() => {
      history.push('/cardquestions');
    }, 1000);

  return (
    <WrapperDiv>
      <DivMenssage>
        <PMenssage>{t('homepage.message')}</PMenssage>
      </DivMenssage>
      <div>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <SpanForm>{t('homepage.span-form-one')}</SpanForm>
          <InputForm
            type="number"
            name="questions"
            ref={register({ required: true, min: 1, max: 50 })}
          />
          {errors.questions && (
            <SpanMessageError> {t('homepage.span-message-error')}</SpanMessageError>
          )}

          <SpanForm>{t('homepage.span-form-two')}</SpanForm>
          <SelectForm name="difficulty" ref={register}>
            <option value=" ">{t('homepage.option-one')}</option>
            <option value="easy">{t('homepage.option-two')}</option>
            <option value="medium">{t('homepage.option-three')}</option>
            <option value="hard">{t('homepage.option-four')}</option>
          </SelectForm>

          <SpanForm>{t('homepage.span-form-three')}</SpanForm>
          <SelectForm name="type" ref={register}>
            <option value=" ">{t('homepage.option-five')}</option>
            <option value="multiple">{t('homepage.option-six')}</option>
            <option value="boolean">{t('homepage.option-seven')}</option>
          </SelectForm>

          <ButtonForm type="submit">{t('homepage.button-form')}</ButtonForm>
        </FormControl>
      </div>
    </WrapperDiv>
  );
};

export default Hompage;
