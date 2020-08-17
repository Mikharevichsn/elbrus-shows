import { GET_FILMLIST, RECEIVE_DATA_FROM_FETCH,  GET_FILM_ID} from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {

    case GET_FILMLIST:
      return {
        ...state,
        films: action.payload,
      };
   
      case RECEIVE_DATA_FROM_FETCH:
        return {
          ...state,
          moreDetalisFilm:  action.payload.data
        }
        case GET_FILM_ID:
          return {
            ...state,
            moreDetalisFilm: action.payload
          }
    default:
      return state;
  }
};
