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
  const { WrapperDiv, Card, Header, DivLink, SpanLink, ButtonLink, BodyDiv, PData } = style;
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
    <BodyDiv>
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
            <PData>{t('cardinfopoints.p-one')}</PData>
            <PData>
              {t('cardinfopoints.p-two')}: {dataApi.length}{' '}
            </PData>
            <PData>
              {t('cardinfopoints.p-three')}: {point}
            </PData>
            <PData>
              {t('cardinfopoints.p-four')}: {dataApi.length - point}
            </PData>
            <PData>
              {t('cardinfopoints.p-five')}: {Math.round(porcentaje)}%
            </PData>
          </div>
          <footer>
            <PData>{users.length !== 0 && users[0].name.toUpperCase()} </PData>
            <PData>{t('cardinfopoints.title-final')}</PData>
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
    </BodyDiv>
  );
};

export default CardInfoPoints;
