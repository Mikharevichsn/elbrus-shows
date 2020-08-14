import { GET_FILMLIST } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_FILMLIST:
      return {
        content: action.payload,
      };
    
    default:
      return state;
  }
};
