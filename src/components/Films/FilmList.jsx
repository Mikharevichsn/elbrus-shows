import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilmCard from './FilmCard';
import { Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function FilmList() {
  const filmList = useSelector((state) => state.films); //Ссылка на хранилище

  const [currentPage, setCurrentPage] = useState(0);
  const [filmsOnPage, setFilmsOnPage] = useState(20);
  const [genre, setGenre] = useState('all');
  const [filteredFilms, setFilteredFilms] = useState([]);
  const countPages = Math.ceil(filteredFilms.length / filmsOnPage);
  const pages = new Array(countPages).fill('');
  console.log('pages: ', pages);

  useEffect(() => {
    setFilteredFilms(() => {
      if (genre !== 'all') {
        return filmList.filter((film) =>
          film.genres.some((el) => el.genre == genre)
        );
      } else {
        return [...filmList];
      }
    });
  }, [filmList, genre]);

  return (
    <>
    {/* Сортировка */}
      <select
        name=""
        id=""
        onChange={(event) => {
          console.log(event.target.value);
          setCurrentPage(0)
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

      {/* Фильтр */}
      <select
        name=""
        id=""
        onChange={(event) => {
          console.log(event.target.value);
          setCurrentPage(0)
          setGenre(event.target.value);
        }}
      >
        <option value="all" selected>
          Не выбран
        </option>
        <option value="мультфильм">Мультфильм</option>
        <option value="драма">драма</option>
        <option value="комедия">комедия</option>
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
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>

        {pages.map((_, index) => {
          return (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => setCurrentPage(index)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink
            next
            href="#"
            onClick={(event) => {
              event.preventDefault();
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </>
  );
}
