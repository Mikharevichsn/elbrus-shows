import {GET_CONTENT} from './actionTypes'

export const getContent = () => {
  return async dispatch => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search?')
    const res = await resp.json()
    const content = res[0].url

    dispatch({
      type: GET_CONTENT,
      payload: content
    })
  }
};