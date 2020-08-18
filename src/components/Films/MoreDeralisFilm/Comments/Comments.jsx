import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../../../redux/action';


const Comments = () => {
const [comments, setComments] = useState([])
const dispatch = useDispatch()

useEffect(() => {(async () => {
const arr = await dispatch(getComments())
  setComments(state => [...state, arr ])
 })()
}, []);

console.log(comments)

  return (
   <>
   {comments && <h2>Отзывы</h2>}
   </>
  );
}

export default Comments;
