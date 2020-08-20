import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Table } from 'reactstrap';
import { startFetch, startVideoFetch } from '../../../redux/action';
import ModalComments from './ModalComment/ModalComments';
import Comments from './Comments/Comments';

const MoreDetails = () => {

  const dispatch = useDispatch();

  const moreDetalisFilm = useSelector((state) => state.moreDetalisFilm);
  const video = useSelector((state) => state.videoUrl);
  const filmList = useSelector((state) => state.films);
  const filmOne = useParams().id;
  // const [stateBoolean, setStateBoolean] = useState(false)
  const film = filmList.find((el) => el.filmId === Number(filmOne));
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(startFetch(film.filmId));
  }, [dispatch, film.filmId]);

  useEffect(() => {
    dispatch(startVideoFetch(film.filmId));
  }, [film.filmId, dispatch]);

  console.log(video);

  return (
    <Container>
      {moreDetalisFilm && (
        <>
          <Row>
            <Col>
              <img
                src={`${film.posterUrlPreview}`}
                alt={`Poster ${film.nameEn}`}
              />
            </Col>

            <Col>
              <h1>{film.nameRu} </h1>
              <p className="font-weight-light">{film.nameEn}</p>
              <Table
                striped
                bordered
                hover
                variant="dark"
                className="table table-striped table-dark "
                defaultActiveKey="profile"
              >
                <tbody>
                  <tr>
                    <th scope="row">Год производства</th>
                    <td>{film.year}</td>
                  </tr>
                  <tr>
                    <th scope="row">Страна</th>
                    <td>
                      {film.countries.map((el, i) =>
                        i === film.countries.length - 1
                          ? `${el.country}`
                          : `${el.country}, `
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Жанр</th>
                    <td>
                      {film.genres.map((el, i) =>
                        i === film.genres.length - 1
                          ? `${el.genre}`
                          : `${el.genre}, `
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Продолжительность</th>
                    <td>{film.filmLength}</td>
                  </tr>
                  <tr>
                    <th scope="row">Рейтинг фильма</th>
                    <td>
                      <span style={{ color: ' #d94f5c' }}>{film.rating}</span>{' '}
                      <span style={{ color: ' #a5a5a5', fontSize: '0.8em' }}>
                        ({film.ratingVoteCount})
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Возраст / Рейтинг MPAA</th>
                    <td>
                      {moreDetalisFilm.ratingAgeLimits} /{' '}
                      {moreDetalisFilm.ratingMpaa}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Слоган</th>
                    <td>"{moreDetalisFilm.slogan}"</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className={'pt-5'}>
            {video.trailers && (
              <Col
                className="embed-responsive embed-responsive-16by9"
                lg="6"
                sm="8"
              >
                <iframe
                  title="trailer"
                  class="embed-responsive-item"
                  src={
                    video.trailers[0] &&
                    video.trailers[0].url.replace(/watch\?v=/g, 'embed/')
                  }
                  allowfullscreen
                ></iframe>
              </Col>
            )}
            <Col sm="6" lg="6">
              {moreDetalisFilm.description}
            </Col>
          </Row>
          <Row className={'pt-5'}>
            <Comments />
          </Row>
          <Row className={'pt-5'}>{user.localId && <ModalComments />}</Row>
        </>
      )}
    </Container>
  );
};

export default MoreDetails;
