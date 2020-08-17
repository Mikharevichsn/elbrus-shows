import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmCard(props) {
  const { film, id } = props;
  return (
    <>
      <Link to={`/films/${film.nameRu}`}>
        <img style={{ width: '25%' }} src={`${film.posterUrl}`} />
      </Link>
    </>
  );
}
