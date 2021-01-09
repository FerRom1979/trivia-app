import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  width: 100%;
  height: 96vh;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 300;
  padding-top: 5px;
  padding: 10px;
`;
export const TitleForm = styled.h3`
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
`;
export const WrapperDiv = styled.div`
  border: 1px solid black;
`;
export const InputForm = styled.input`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const ButtonForm = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
  background-color: #3498db;
  color: white;
`;
export const SpanForm = styled.span`
  text-align: center;
  color: #34495e;
  padding-top: 10px;
`;
