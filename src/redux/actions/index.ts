import { GET_DATA_LOGIN, GET_DATA_API } from './types';
import axios from 'axios';
import { IDataApi, IUser } from '../../types';

export const addDataLogin = (user: IUser) => ({
  type: GET_DATA_LOGIN,
  payload: user,
});

export const addDataApi = (amount: IDataApi, difficulty: IDataApi, typeform: IDataApi) => async (
  dispatch: any
) => {
  try {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${typeform}&lang=es`
    );
    dispatch({
      type: GET_DATA_API,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};