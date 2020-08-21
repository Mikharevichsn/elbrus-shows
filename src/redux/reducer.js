import {
  GET_FILMLIST,
  RECEIVE_DATA_FROM_FETCH,
  GET_VIDEO,
  SET_USER,
  SET_COMMENTS,
  SAVE_COMMENTS,
  GET_NEWS,
  ADD_BOOKMARK,
  DEL_BOOKMARK,
  ADD_LIKE,
  DEL_LIKE,
  ADD_ARR_BOOKMARKS,
  ADD_ARR_LIKES,
  DEL_USER,
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
    case SET_COMMENTS:
      return {
        ...state,
        comments: [...action.payload],
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };

    case ADD_BOOKMARK:
      return {
        ...state,
        user: {
          ...state.user,
          wishList: [...state.user.wishList, action.payload],
        },
      };

    case DEL_BOOKMARK:
      const tmpWishlist = [...state.user.wishList].filter(
        (el) => el.filmId !== action.payload.filmId
      );
      return {
        ...state,
        user: {
          ...state.user,
          wishList: [...tmpWishlist],
        },
      };

    case ADD_ARR_BOOKMARKS:
      return {
        ...state,
        user: {
          ...state.user,
          wishList: [...action.payload],
        },
      };

    case ADD_LIKE:
      return {
        ...state,
        user: {
          ...state.user,
          favoriteList: [...state.user.favoriteList, action.payload],
        },
      };

    case ADD_ARR_LIKES:
      return {
        ...state,
        user: {
          ...state.user,
          favoriteList: [...action.payload],
        },
      };

    case DEL_LIKE:
      const tmpFavoriteList = [...state.user.favoriteList].filter(
        (el) => el.filmId !== action.payload.filmId
      );
      return {
        ...state,
        user: {
          ...state.user,
          favoriteList: [...tmpFavoriteList],
        },
      };

    case DEL_USER:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};
