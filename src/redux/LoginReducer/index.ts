import { GET_DATA_LOGIN } from '../actions/types';

const initialState: any = {
  users: [],
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA_LOGIN:
      return {
        ...state,
        users: [action.payload],
      };

    default:
      return state;
  }
};
export default loginReducer;
