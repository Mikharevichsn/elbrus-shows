import { GET_FILMLIST } from './actionTypes';

export const getContent = () => {
  return async (dispatch) => {
    await fetch('https://elbrus-shows.firebaseio.com/films.json', {
      headers: { 'Content-type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((content) => {
        dispatch({
          type: GET_FILMLIST,
          payload: content,
        });
      });
  };
};
