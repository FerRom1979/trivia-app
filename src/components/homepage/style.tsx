import styled from 'styled-components';

export const WrapperDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
export const InputForm = styled.input`
  text-align: right;
  width: 90%;
  padding: 10px 12px;
  border: none;
  background-color: #f1f1f1;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  cursor: pointer;
`;
export const DivMenssage = styled.div`
  min-width: 200px;
  max-width: 500px;
`;
export const PMenssage = styled.p`
  font-size: 40px;
  color: red;
  text-align: center;
`;
export const SelectForm = styled.select`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 12px;
  width: 100%;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  font-size: 20px;
  cursor: pointer;
`;
export const SpanForm = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export const ButtonForm = styled.button`
  padding: 10px 12px;
  color: white;
  background-color: #1b4f72;
  font-size: 16px;
  text-decoration: none;
  border: none;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #008cba;
    color: white;
  }
`;
