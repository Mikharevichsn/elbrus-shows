import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getContent } from '../../redux/action';
import { Container, Row, Col } from 'reactstrap';

const MoreDetails = () => {
  const filmList = useSelector((state) => state.films);
  console.log('filmList', filmList);
  const params = useParams();
  console.log('params> ', params);
  const filmOne = useParams().id;
  console.log('filmOne> ', filmOne);
  const film = filmList.find((el) => el.nameRu === filmOne);
  console.log('film> ', film);

  return (
    <Container>
      {filmList && (
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
                    <td style={{ color: ' #d94f5c' }}>{film.rating}</td>
                  </tr>
                  <tr>
                    <th scope="row">Количество голосов</th>
                    <td>{film.ratingVoteCount}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default MoreDetails;
