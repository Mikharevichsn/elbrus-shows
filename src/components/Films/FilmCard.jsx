import React from 'react';

export default function FilmCard(props) {
  const { film } = props;
  return (
    <>
      <img style={{width: '25%' }} src={`${film.posterUrl}`} />
      {console.log(film)}
    </>
  );
}
