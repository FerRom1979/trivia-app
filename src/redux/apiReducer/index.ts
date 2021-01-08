import { GET_DATA_API } from '../actions/types';

const initialState: any = {
  data: [],
};

const searchDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA_API:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default searchDataReducer;
