import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../../../redux/action';
import { useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import actor from '../../../../public/img/actor.png';
import writer from '../../../../public/img/writer.png';
import popcorn from '../../../../public/img/popcorn.png';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const filmIdParams = useParams().id;
  useEffect(() => {
    (async () => {
      const obj = await dispatch(getComments());
      console.log(obj);
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const element = obj[key];
          if (element.filmId === filmIdParams) {
            setComments((state) => [...state, element]);
          }
        }
      }
    })();
  }, [dispatch, filmIdParams]);
  console.log(comments);
  comments.map((el) => el.rating && console.log(el.rating.scenario === ''));

  return (
    <>
      <Row>
        <Col>
          <h4>Рецензии</h4>
        </Col>
      </Row>

      <br />
      {comments &&
        comments.map((el) => (
          <>
            <ListGroup>
              <ListGroupItemHeading>Здесь Имя</ListGroupItemHeading>

              <ListGroupItemText>{el.post}</ListGroupItemText>
              <ListGroupItemText>
                <img src={actor} alt="actor-icon" style={{ width: '10%' }} />{' '}
                {el.rating.scenario && el.rating.scenario === ''
                  ? 'Не оценил'
                  : el.rating.scenario}
                /5
                <img
                  src={writer}
                  alt="writer-icon"
                  style={{ width: '10%' }}
                />{' '}
                {el.rating && el.rating.actors === ''
                  ? 'Не оценил'
                  : el.rating.actors}
                /5{' '}
                <img src={popcorn} alt="writer-icon" style={{ width: '10%' }} />
                :
                {el.rating && el.rating.general === ''
                  ? 'Не оценил'
                  : el.rating.general}
                /5
              </ListGroupItemText>
            </ListGroup>
          </>
        ))}
    </>
  );
};

export default Comments;
