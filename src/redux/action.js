import {
  GET_FILMLIST,
  START_FETCH,
  RECEIVE_DATA_FROM_FETCH,
  SET_USER,
  GET_VIDEO,
  START_VIDEO,
  SET_COMMENTS,
  SAVE_COMMENTS,
  ADD_BOOKMARK,
  DEL_BOOKMARK,
  ADD_LIKE,
  DEL_LIKE,
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
    await fetch('https://elbrus-shows.firebaseio.com/comments.json', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-type': 'application/json' },
    });
    return dispatch({
      type: SAVE_COMMENTS,
      payload: [obj],
    });
  };
};

export const setComments = (idFilm) => {
  return async (dispatch) => {
    const checkRating = (actor, scenario, general) => {
      console.log(actor);
      console.log(Number(actor) + Number(scenario) + Number(general));
      return Number(actor) + Number(scenario) + Number(general);
    };

    const setColor = (num) =>
      num >= 12 ? 'success' : num >= 9 ? 'warning' : 'danger';

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
    arr.map(
      (el) =>
        (el.result = setColor(
          checkRating(el.rating.actors, el.rating.scenario, el.rating.general)
        ))
    );

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

export const addBookmark = (payload) => {
  return {
    type: ADD_BOOKMARK,
    payload,
  };
};

export const delBookmark = (payload) => {
  return {
    type: DEL_BOOKMARK,
    payload,
  };
};

export const addLike = (payload) => {
  return {
    type: ADD_LIKE,
    payload,
  };
};
export const delLike = (payload) => {
  return {
    type: DEL_LIKE,
    payload,
  };
};
