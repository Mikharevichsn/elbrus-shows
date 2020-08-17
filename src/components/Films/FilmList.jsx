import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '../../redux/action';
import FilmCard from './FilmCard';

export default function FilmList() {
  const filmList = useSelector((state) => state.films); //Ссылка на хранилище


  return (
    <div>
      {filmList &&
        filmList.map((film, i) => {
          while (i < 500) {
            return <FilmCard key={i} film={film} />;
          }
        })}
    </div>
  );
}
