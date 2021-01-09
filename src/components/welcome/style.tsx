import styled from 'styled-components';
import questions from '../../assets/img/questions.jpg';

const ques = questions;
export const StyledWraper = styled.div`
  background-size: cover;
  background-image: url(${ques});
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 96vh;
  margin-top: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;

export const Title = styled.h1`
  color: #e74c3c;
  font-size: 30px;
`;
