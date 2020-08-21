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
  const [searchedFilms, setSearchFilm] = useState('');
  const [sort, setSort] = useState('');
  const countPages = Math.ceil(filteredFilms.length / filmsOnPage);
  const pages = new Array(countPages).fill('');
  const [msgNoFilms, setMsgNoFilms] = useState('');

  // useEffect(() => {
  //   if (filteredFilms.length === 0) {
  //     console.log('По данным критериям поиска фильмов нет!');
  //   }
  // }, [filteredFilms]);

  // Фильтры---------------------
  useEffect(() => {
    setFilteredFilms(() => {
      if (genre !== 'all' && country !== 'all') {
        return filmList
          .filter((film) => film.genres.some((el) => el.genre === genre))
          .filter((film) =>
            film.countries.some((el) => el.country === country)
          );
      } else if (genre !== 'all') {
        return filmList.filter((film) =>
          film.genres.some((el) => el.genre === genre)
        );
      } else if (country !== 'all') {
        return filmList.filter((film) =>
          film.countries.some((el) => el.country === country)
        );
      } else if (searchedFilms.length !== 0) {
        return filmList.filter((film) => {
          if (
            film.nameRu.toLowerCase().trim().replace(/\s+/g, '') ===
            searchedFilms
          ) {
            return film;
          }
        });
      } else {
        return [...filmList];
      }
    });
  }, [genre, country, filmList, searchedFilms]);

  // Сортировка-------------------
  useEffect(() => {
    if (sort === 'random') {
      setFilteredFilms((state) => [...state].sort(() => Math.random() - 0.5));
    } else if (sort === 'increaseRate') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          if (a.rating > b.rating) return 1;
          if (a.rating < b.rating) return -1;
          return 0;
        })
      );
    } else if (sort === 'nothing') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          if (a.rating < b.rating) return 1;
          if (a.rating > b.rating) return -1;
          return 0;
        })
      );
    } else if (sort === 'increaseYear') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          if (a.year > b.year) return 1;
          if (a.year < b.year) return -1;
          return 0;
        })
      );
    } else if (sort === 'declineYear') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          if (a.year < b.year) return 1;
          if (a.year > b.year) return -1;
          return 0;
        })
      );
    } else if (sort === 'increaseDuration') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          a.filmLength.replace(/:/, '.');
          b.filmLength.replace(/:/, '.');
          if (a.filmLength > b.filmLength) return 1;
          if (a.filmLength < b.filmLength) return -1;
          return;
        })
      );
    } else if (sort === 'declineDuration') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          a.filmLength.replace(/:/, '.');
          b.filmLength.replace(/:/, '.');
          if (a.filmLength < b.filmLength) return 1;
          if (a.filmLength > b.filmLength) return -1;
          return 0;
        })
      );
    } else if (sort === 'increaseVoteCount') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          if (a.ratingVoteCount > b.ratingVoteCount) return 1;
          if (a.ratingVoteCount < b.ratingVoteCount) return -1;
          return 0;
        })
      );
    } else if (sort === 'declineVoteCount') {
      setFilteredFilms((state) =>
        [...state].sort((a, b) => {
          if (a.ratingVoteCount < b.ratingVoteCount) return 1;
          if (a.ratingVoteCount > b.ratingVoteCount) return -1;
          return 0;
        })
      );
    }
  }, [sort, genre, country]);

  useEffect(() => {
    filteredFilms.length === 0
      ? setMsgNoFilms('По вашим критериям поиска фильмов не найдено!')
      : setMsgNoFilms('');
  }, [filteredFilms]);

  filmList &&
    filteredFilms &&
    filteredFilms.map((film, i) => {
      if (
        i >= currentPage * filmsOnPage &&
        i < currentPage * filmsOnPage + filmsOnPage
      ) {
        return <FilmCard film={film} />;
      }
      return '';
    });

  return (
    <>
      <div className="filter">
        <div className="left">
          <select
            className="film-select"
            name=""
            id=""
            defaultValue="all"
            onChange={(event) => {
              setCurrentPage(0);
              setGenre(event.target.value);
            }}
          >
            <option value="all">Выберите жанр</option>
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

          {/* Фильтр по странам*/}
          <select
            className="film-select"
            name=""
            id=""
            defaultValue="all"
            onChange={(event) => {
              setCurrentPage(0);
              setCountry(event.target.value);
            }}
          >
            <option value="all">Фильтр по странам</option>
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
          {/* Поиск фильма */}
          <input
            type="search"
            placeholder="Введите название фильма"
            className="search-film"
            onChange={(event) => {
              setSearchFilm(
                event.target.value.toLowerCase().replace(/\s+/g, '')
              );
            }}
          ></input>
        </div>
        {/* Сортировка */}
        <div>
          <select
            className="film-select sort"
            name=""
            id=""
            defaultValue="nothing"
            onChange={(event) => {
              setCurrentPage(0);
              setSort(event.target.value);
            }}
          >
            <option value="random">В случайном порядке</option>
            <option value="nothing">По рейтингу (по уменьшению)</option>
            <option value="increaseRate">По рейтингу (по увеличению)</option>
            <option value="increaseYear">По годам (20 век - н.в)</option>
            <option value="declineYear">По годам (н.в - 20 век)</option>
            <option value="increaseDuration">
              По длительности (по увеличению)
            </option>
            <option value="declineDuration">
              По длительности (по уменьшению)
            </option>
            <option value="increaseVoteCount">
              По кол-ву голосов на КиноПоиске (по увеличению)
            </option>
            <option value="declineVoteCount">
              По кол-ву голосов на КиноПоиске (по уменьшению)
            </option>
          </select>
        </div>
      </div>
      <div className="filmList">
        <Row>
          {filmList &&
            filteredFilms &&
            filteredFilms.map((film, i) => {
              if (
                i >= currentPage * filmsOnPage &&
                i < currentPage * filmsOnPage + filmsOnPage
              ) {
                return <FilmCard key={i} film={film} />;
              }
              return false;
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

        {pages &&
          pages.length > 0 &&
          pages.map((_, index) => {
            return (
              <PaginationItem key={index} active={currentPage === index}>
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

        {pages && pages.length > 0 && currentPage !== pages.length - 1 && (
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

        {pages && pages.length > 0 && currentPage !== pages.length - 1 && (
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
      <h2 className="no-film-message"> {msgNoFilms}</h2>
    </>
  );
}
