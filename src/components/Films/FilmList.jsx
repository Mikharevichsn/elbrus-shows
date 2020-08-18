import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilmCard from './FilmCard';
import { Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function FilmList() {
  const filmList = useSelector((state) => state.films); //Ссылка на хранилище

  const [currentPage, setCurrentPage] = useState(0);
  const [filmsOnPage] = useState(20);
  const [genre, setGenre] = useState('all');
  const [country, setCountry] = useState('all');
  const [filteredFilms, setFilteredFilms] = useState([]);
  const countPages = Math.ceil(filteredFilms.length / filmsOnPage);
  const pages = new Array(countPages).fill('');

  useEffect(() => {
    setFilteredFilms(() => {
      if (genre !== 'all') {
        return filmList.filter((film) =>
          film.genres.some((el) => el.genre === genre)
        );
      } else {
        return [...filmList];
      }
    });
  }, [filmList, genre]);

  useEffect(() => {
    setFilteredFilms(() => {
      if (country !== 'all') {
        return filmList.filter((film) =>
          film.countries.some((el) => el.country === country)
        );
      } else {
        return [...filmList];
      }
    });
  }, [filmList, country]);

  return (
    <>
      <p1>Фильтр по жанру: </p1>
      {/* Фильтр */}
      <select
        name=""
        id=""
        onChange={(event) => {
          setCurrentPage(0);
          setGenre(event.target.value);
        }}
      >
        <option value="all" selected>
          Не выбран
        </option>
        <option value="мультфильм">мультфильм</option>
        <option value="аниме">аниме</option>
        <option value="драма">драма</option>
        <option value="детектив">детектив</option>
        <option value="мелодрама">мелодрама</option>
        <option value="комедия">комедия</option>
        <option value="приключения">приключения</option>
        <option value="боевик">боевик</option>
        <option value="триллер">триллер</option>
        <option value="ужасы">ужасы</option>
        <option value="фантастика">фантастика</option>
        <option value="фэнтези">фэнтези</option>
        <option value="криминал">криминал</option>
        <option value="биография">биография</option>
        <option value="спорт">спорт</option>
        <option value="музыка">музыка</option>
        <option value="семейный">семейный</option>
      </select>

      <p1>Фильтр по странам: </p1>
      {/* Фильтр */}
      <select
        name=""
        id=""
        onChange={(event) => {
          setCurrentPage(0);
          setCountry(event.target.value);
        }}
      >
        <option value="all" selected>
          Не выбран
        </option>
        <option value="Россия">Россия</option>
        <option value="СССР">СССР</option>
        <option value="США">США</option>
        <option value="Франция">Франция</option>
        <option value="Италия">Италия</option>
        <option value="Испания">Испания</option>
        <option value="Великобритания">Великобритания</option>
        <option value="Германия">Германия</option>
        <option value="Корея Южная">Корея Южная</option>
        <option value="Япония">Япония</option>

      </select>

      <div className="filmList">
        <Row>
          {filmList &&
            filteredFilms.map((film, i) => {
              if (
                i >= currentPage * filmsOnPage &&
                i < currentPage * filmsOnPage + filmsOnPage
              ) {
                return <FilmCard film={film} />;
              }
            })}
        </Row>
      </div>

      <Pagination aria-label="Page navigation example">
        {currentPage > 0 && (
          <PaginationItem>
            {/* Переход на первую страницу */}
            <PaginationLink
              first
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setCurrentPage(0);
              }}
            />
          </PaginationItem>
        )}

        {currentPage > 0 && (
          <PaginationItem>
            {/* Переход на страницу назад */}
            <PaginationLink
              previous
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setCurrentPage(currentPage - 1);
              }}
            />
          </PaginationItem>
        )}

        {pages.map((_, index) => {
          return (
            <PaginationItem active={currentPage === index}>
              {/* Переход на выбранную страницу */}
              <PaginationLink
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setCurrentPage(index);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage !== pages.length - 1 && (
          <PaginationItem>
            {/* Переход на страницу вперед */}
            <PaginationLink
              next
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setCurrentPage(currentPage + 1);
              }}
            />
          </PaginationItem>
        )}

        {currentPage !== pages.length - 1 && (
          <PaginationItem>
            <PaginationLink
              // {/* Переход на последнюю страницу */}
              last
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setCurrentPage(pages.length - 1);
              }}
            />
          </PaginationItem>
        )}
      </Pagination>
    </>
  );
}
