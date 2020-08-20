import React, { useEffect } from 'react';
import { getNews } from '../../../redux/action';

import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../News/News';
import RandomFilm from '../RandomFilm/RandomFilm';

export const Main = () => {
  const news = useSelector((state) => state.news.articles); //Ссылка на хранилище

  const dispatch = useDispatch();

  useEffect(() => {
    //useEffect для загрузки контента при внедрение этого компонента
    dispatch(getNews());
  }, [dispatch]);
  const newsData = [];
  for (let i = 0; i < news.length; i++) {
    console.log(news[i].title.length);
    newsData.push({
      index: i,
      headline: `${
        news[i].title.replace(/-\s+([^\n]+)/g, '').length > 50
          ? news[i].title.replace(/-\s+([^\n]+)/g, '').slice(0, 50) + '...'
          : news[i].title.replace(/-\s+([^\n]+)/g, '')
      }`,
      button: 'Подробней',
      src: news[i].urlToImage,
    });
  }

  console.log(newsData);

  const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
    },
  ];

  return (
    <>
      <Slider heading="Example Slider" slides={newsData} />
      <RandomFilm />
    </>
  );
};

// <Button onClick = { (e) => {e.preventDefault();  dispatch(getContent())}}>Button</Button>
// <div>{  <img style={{  width: "600px", height: "500px"}} alt="Cat" src={cat} />}</div>

// const cat = useSelector((state) => state.content);   //Ссылка на хранилище

// const dispatch = useDispatch()

// useEffect(() => {        //useEffect для загрузки контента при внедрение этого компонента
// dispatch(getContent())
// }, [dispatch]);

// export default Main
