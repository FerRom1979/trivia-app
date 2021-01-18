import React, { useState } from 'react';
import Slider from 'react-slick';
import './styles.css';
import { counterPoint } from '../../redux/actions/index';
import { ICardQuestions } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CardQuestions = () => {
  const [t] = useTranslation('global');
  const history = useHistory();
  const dispatch = useDispatch();
  const [control, setControl] = useState(0);
  const dataApi = useSelector((state: any) => state.api.data.results);
  const settings: object = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToscroll: 1,
    // eslint-disable-next-line react/display-name
    appendDots: (dots: any) => (
      <div className="divDots ">
        <ul className="ulDots"> {dots} </ul>
      </div>
    ),
    // eslint-disable-next-line react/display-name
    customPaging: (i: any) => <div className="divCustomPaging">{i + 1}</div>,
  };

  const sumar = () => {
    if (confirm('Estás seguro de haBer completado todas las preguntas')) {
      dispatch(counterPoint(control));
      setTimeout(() => {
        history.push('/cardinfopoints');
      }, 1000);
    }
  };

  return (
    <div>
      <div className="divmain">
        <Slider {...settings}>
          {dataApi &&
            dataApi.map((item: ICardQuestions, index: number) => (
              <div className="cardDiv" key={index}>
                <h1>
                  <span className="title">{t('cardQuestions.title')}</span> {item.category}
                </h1>
                <p>
                  <span className="spanCard">{t('cardQuestions.span-one')}:</span> {item.difficulty}
                </p>
                <p>
                  <span className="spanCard">{t('cardQuestions.span-two')}:</span> {item.type}
                </p>
                <p className="pQuestion ">{item.question}</p>
                <p>
                  <span className="spanCard">{t('cardQuestions.span-three')}:</span> {index + 1}
                </p>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    className="divQuestions"
                    style={{ order: Math.floor(Math.random() * (5 - 1 + 1) + 1) }}
                  >
                    <p>{item.correct_answer}</p>
                    <input
                      type="radio"
                      name="two"
                      onClick={() => setControl(control + 1)}
                      style={{ order: 0 }}
                    />
                  </div>
                  <div
                    className="divQuestions"
                    style={{ order: Math.floor(Math.random() * (5 - 1 + 1) + 1) }}
                  >
                    <p>{item.incorrect_answers[0]}</p>
                    <input type="radio" name="two" />
                  </div>
                  <div
                    className="divQuestions"
                    style={{ order: Math.floor(Math.random() * (5 - 1 + 1) + 1) }}
                  >
                    <p>{item.incorrect_answers[1]}</p>
                    {item.incorrect_answers[2] && <input type="radio" name="two" />}
                  </div>
                  <div
                    className="divQuestions"
                    style={{ order: Math.floor(Math.random() * (5 - 1 + 1) + 1) }}
                  >
                    <p>{item.incorrect_answers[2]}</p>
                    {item.incorrect_answers[2] && <input type="radio" name="two" />}
                  </div>
                </form>
              </div>
            ))}
        </Slider>
      </div>
      <div className="divButton ">
        <h3>{t('cardQuestions.subtitle')}</h3>
        <button className="Button " onClick={sumar}>
          {t('cardQuestions.button')}
        </button>
      </div>
    </div>
  );
};

export default CardQuestions;
