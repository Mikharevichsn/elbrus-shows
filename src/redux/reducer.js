import {
  GET_FILMLIST,
  RECEIVE_DATA_FROM_FETCH,
  GET_FILM_ID,
  GET_VIDEO,
} from './actionTypes';

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
        moreDetalisFilm: action.payload.data,
      };


    case GET_VIDEO:
      return {
        ...state,
        videoUrl: action.payload,
      };
    default:
      return state;
  }
};
