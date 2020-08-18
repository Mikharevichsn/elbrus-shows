import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getContent, startFetch, startVideoFetch } from '../../redux/action';
import { Container, Row, Col } from 'reactstrap';

const MoreDetails = () => {
  // const [stateFilms, setState] = useState([]);

  const dispatch = useDispatch();
  const moreDetalisFilm = useSelector((state) => state.moreDetalisFilm);
  const video = useSelector((state) => state.videoUrl);
console.log(video)
  const filmList = useSelector((state) => state.films);
  const filmOne = useParams().id;

  const film = filmList.find((el) => el.nameRu === filmOne);

  useEffect(() => {
    dispatch(startFetch(film.filmId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(startVideoFetch(film.filmId));
  }, [dispatch]);

const embed = video.trailers[0] && video.trailers[0].url.replace(/watch\?v=/g, 'embed/')

  console.log(embed);

  return (
    <Container>
      {moreDetalisFilm && (
        <>
          <Row>
            <Col>
              <img
                style={{ width: '70%' }}
                src={`${film.posterUrlPreview}`}
                alt={`Poster ${film.nameEn}`}
              />
            </Col>

            <Col>
              <h1>{film.nameRu} </h1>
              <p className="font-weight-light">{film.nameEn}</p>
              <table
                className="table table-striped table-dark "
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
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
              </table>
            </Col>
          </Row>
          <Row p="7">
            <Col sm="6" lg="8" className={'mt-5'}>
              {moreDetalisFilm.description}
            </Col>
          </Row>
          {/* {video.trailers[0].url && <video style={{width: '100px'}} autoplay="autoplay"src={video.trailers[0].url}/>} */}
          {video.trailers[0] && <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src={embed} allowfullscreen></iframe>
</div>}

        </>
      )}
    </Container>
  );
};

export default MoreDetails;
