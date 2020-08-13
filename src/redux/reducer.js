import { GET_CONTENT } from './actionTypes';

export const reducer = (state, action) => {

  switch (action.type) {
    case GET_CONTENT:
      return {
        content: action.payload,
      };
      
    default:
      return state;
  }
};
