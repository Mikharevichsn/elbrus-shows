import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBookmark, delBookmark, addLike, delLike } from '../../redux/action';

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Col,
} from 'reactstrap';

export default function FilmCard(props) {
  const user = useSelector((state) => state.user.localId);
  const userObj = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  const { film } = props;
  const [bookmarked, setBookmarked] = useState();
  const [liked, setLiked] = useState();

  useEffect(() => {
    if (user && userObj.wishList.includes(film.filmId)) {
      setBookmarked(true);
    } else {
      setBookmarked(false);
    }
  }, [userObj, film, user]);

  useEffect(() => {
    if (user && userObj.favoriteList.includes(film.filmId)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [userObj, film, user]);

  return (
    <Col sm="6" lg="3" xs="12">
      <Card style={{ backgroundColor: '#000' }}>
        <Link to={`/films/${film.filmId}`}>
          <CardImg src={`${film.posterUrl}`} alt="Card image cap" />
        </Link>
        <CardBody>
          <CardTitle>{`"${film.nameRu}", ${film.year}`}</CardTitle>
          <CardSubtitle>
            <div className="film-list-country">
              Страна:{' '}
              {film.countries.map((el, i) => {
                if (film.countries.length - 1 === i) {
                  return el.country;
                } else {
                  return `${el.country}, `;
                }
              })}
            </div>
            Жанр:{' '}
            {film.genres.map((el, i) => {
              if (film.genres.length - 1 === i) {
                return el.genre;
              } else {
                return `${el.genre}, `;
              }
            })}
          </CardSubtitle>
          <div className="film-card-buttons">
            <div>
              <Link to={`/films/${film.filmId}`}>
                <Button>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-list"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </Button>
              </Link>
              {/* Wishlist */}
              <Button
                onClick={(e) => {
                  if (user !== undefined) {
                    if (bookmarked) {
                      // удалить фильтром из массива текущ фильм
                      dispatch(delBookmark(film.filmId));
                      console.log('delay delete');
                    } else {
                      dispatch(addBookmark(film.filmId));
                    }
                  }
                }}
              >
                {bookmarked ? (
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-bookmark-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z"
                    />
                  </svg>
                ) : (
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-bookmark-plus"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4zm9-1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"
                    />
                  </svg>
                )}
              </Button>
              {/* Like */}
              <Button
                onClick={(e) => {
                  if (user !== undefined) {
                    if (liked) {
                      // удалить фильтром из массива текущ фильм
                      dispatch(delLike(film.filmId));
                      console.log('delay delete');
                    } else {
                      dispatch(addLike(film.filmId));
                    }
                  }
                }}
              >
                {liked ? (
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-heart-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                ) : (
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-heart"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    />
                  </svg>
                )}
              </Button>
            </div>
            <div className="rating-of-film">{film.rating}/10</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
