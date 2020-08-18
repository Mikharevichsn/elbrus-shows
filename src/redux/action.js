import {
  GET_FILMLIST,
  START_FETCH,
  GET_FILM_ID,
  RECEIVE_DATA_FROM_FETCH,
  SET_USER,
  GET_VIDEO,
  START_VIDEO,
} from './actionTypes';

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

export const saveComments = (obj) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://elbrus-shows.firebaseio.com/comments.json',
      {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json' },
      }
    );
    const res = await response.json();
    console.log(res);
  };
};

export const getComments = (obj) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://elbrus-shows.firebaseio.com/comments.json',
      {
       
       
        headers: { 'Content-type': 'application/json' },
      }
    );
    const res = await response.json();
    console.log(res)
   return res
  };
};

export const startFetch = (id) => {
  return { type: START_FETCH, id };
};

export const receiveDataFromFetch = (payload) => {
  return {
    type: RECEIVE_DATA_FROM_FETCH,
    payload,
  };
};

export const startVideoFetch = (id) => {
  return { type: START_VIDEO, id };
};

export const getVideo = (payload) => {
  return {
    type: GET_VIDEO,
    payload,
  };
};
