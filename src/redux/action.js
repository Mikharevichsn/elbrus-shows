import {
  GET_FILMLIST,
  START_FETCH,
  RECEIVE_DATA_FROM_FETCH,
  SET_USER,
  GET_VIDEO,
  START_VIDEO,
  SET_COMMENTS,
  SAVE_COMMENTS
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

export const saveComment = (obj) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://elbrus-shows.firebaseio.com/comments.json',
      {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json' },
      }
    );
    console.log(obj);
    return dispatch({
      type: SAVE_COMMENTS,
      payload: [obj],
    });
  };
};

export const setComments = (idFilm) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://elbrus-shows.firebaseio.com/comments.json',
      {
        headers: { 'Content-type': 'application/json' },
      }
    );
    const arr = [];
    const res = await response.json();
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        const element = res[key];
        if (element.filmId === idFilm) {
          arr.push(element);
        }
      }
    }
    console.log(arr);
    return dispatch({
      type: SET_COMMENTS,
      payload: arr,
    });
  };
};

// export const setComments = (payload) => {
//   return { type: SET_COMMENTS, payload };
// };

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

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};
