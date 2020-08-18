import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../../../redux/action';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const filmIdParams = useParams().id;
  useEffect(() => {
    (async () => {
      const obj = await dispatch(getComments());
      for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
          const element = obj[key];
          if(element.filmId === filmIdParams) {
            setComments(state =>([...state,  element]))
          }
        }
      }
    })();
  }, []);

comments.map(el => console.log(el.post))


  return (
    <>
    
      <h2>Отзывы</h2>
      <div>
      {comments && comments.map(el => <p>{el.post}</p>)}
      </div>
    </>
  );
};

export default Comments;
