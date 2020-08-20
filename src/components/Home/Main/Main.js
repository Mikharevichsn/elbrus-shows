import React, { useEffect } from 'react';
import { getNews } from '../../../redux/action';

import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../News/News';
import RandomFilm from '../RandomFilm/RandomFilm';

export const Main = () => {
  const news = useSelector((state) => state.news.articles); //Ссылка на хранилище

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const newsData = [];

  for (let i = 0; i < news.length; i++) {
    newsData.push({
      index: i,
      headline: `${
        news[i].title.replace(/-\s+([^\n]+)/g, '').length > 50
          ? `${news[i].title.replace(/-\s+([^\n]+)/g, '').slice(0, 50)}...`
          : news[i].title.replace(/-\s+([^\n]+)/g, '')
      }`,
      button: 'Подробней',
      src: news[i].urlToImage,
      srcNews: news[i].url
    });
  }

  return (
    <>
      <Slider heading="Example Slider" slides={newsData} />
      <RandomFilm />
    </>
  );
};
