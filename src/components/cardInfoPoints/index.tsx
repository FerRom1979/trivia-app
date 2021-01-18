import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as style from './style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { addDataApi } from '../../redux/actions/index';

const CardInfoPoints = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [t] = useTranslation('global');
  const { WrapperDiv, Card, Header, DivLink, SpanLink, ButtonLink } = style;
  const point = useSelector((state: any) => state.counter.points);
  const dataApi = useSelector((state: any) => state.api.data.results);
  const users = useSelector((state: any) => state.login.users);

  const porcentaje: number = (point * 100) / dataApi.length;
  const volver = () => {
    const amount = 0,
      difficulty = '',
      typeform = '';
    dispatch(addDataApi(amount, difficulty, typeform));
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <div>
      <WrapperDiv>
        <Card>
          <Header>
            <h2>
              {porcentaje > 80
                ? `${t('cardinfopoints.title-header')} ${porcentaje}% `
                : porcentaje > 50
                ? `${t('cardinfopoints.title-header-two')} `
                : `${t('cardinfopoints.title-header-three')}`}
            </h2>
          </Header>
          <div>
            <p>{t('cardinfopoints.p-one')}</p>
            <p>
              {t('cardinfopoints.p-two')}: {dataApi.length}{' '}
            </p>
            <p>
              {t('cardinfopoints.p-three')}: {point}
            </p>
            <p>
              {t('cardinfopoints.p-four')}: {dataApi.length - point}
            </p>
            <p>
              {t('cardinfopoints.p-five')}: {Math.round(porcentaje)}%
            </p>
          </div>
          <footer>
            <p>{users.length !== 0 && users[0].name.toUpperCase()} </p>
            <p>{t('cardinfopoints.title-final')}</p>
            <DivLink>
              <ButtonLink>
                <Link to="/cardquestions" style={{ textDecoration: 'none' }}>
                  <SpanLink>{t('cardinfopoints.link-one')}</SpanLink>
                </Link>
              </ButtonLink>

              <ButtonLink onClick={volver}>
                <SpanLink>{t('cardinfopoints.link-two')}</SpanLink>
              </ButtonLink>
            </DivLink>
          </footer>
        </Card>
      </WrapperDiv>
    </div>
  );
};

export default CardInfoPoints;
