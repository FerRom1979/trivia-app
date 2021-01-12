import { COUNTER_POINTS_DATA } from '../actions/types';

const initialState: any = {
  points: 0,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COUNTER_POINTS_DATA:
      return {
        ...state,
        points: action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;
