import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { IFormQuestions } from '../../types';
import * as style from './style';

const Hompage = () => {
  const {
    WrapperDiv,
    FormControl,
    InputForm,
    DivMenssage,
    PMenssage,
    SelectForm,
    SpanForm,
    ButtonForm,
  } = style;
  const { register, handleSubmit, errors } = useForm<IFormQuestions>();
  const onSubmit = (data: IFormQuestions, e: any) => {
    console.log(data);
    e.target.reset();
  };

  const testApi = async () => {
    const res = await axios.get(
      'https://opentdb.com/api.php?amount=34&difficulty =type=boolean&lang=es'
    );
    console.log(res.data);
  };

  return (
    <WrapperDiv>
      <DivMenssage>
        <PMenssage>
          Primero configuremos las preguntas segun el nivel de dificultad que busques y la forma de
          juego que prefieras
        </PMenssage>
      </DivMenssage>
      <div>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <SpanForm>Cantidad de preguntas </SpanForm>
          <InputForm type="number" name="questions" ref={register({ min: 1, max: 50 })} />
          {errors.questions && <span>el numero no puede ser menor a 1 ni mayor a 50</span>}

          <SpanForm>Rango de dificultad </SpanForm>
          <SelectForm name="difficulty" ref={register}>
            <option value=" ">Aleatoria</option>
            <option value="easy">Facil</option>
            <option value="medium">Medio</option>
            <option value="hard">Dificil</option>
          </SelectForm>

          <SpanForm>Forma de juego </SpanForm>
          <SelectForm name="type" ref={register}>
            <option value=" ">Aleatoria</option>
            <option value="multiple">Multiple Choise</option>
            <option value="boolean">Verdadero o Falso</option>
          </SelectForm>

          <ButtonForm type="submit">Cargar</ButtonForm>
        </FormControl>
      </div>
      <button onClick={() => testApi()}>test</button>
    </WrapperDiv>
  );
};

export default Hompage;
