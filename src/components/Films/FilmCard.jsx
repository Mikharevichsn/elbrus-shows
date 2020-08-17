import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

export default function FilmCard(props) {
  const { film } = props;
  console.log(film);

  return (
    <CardGroup>
      <Card>
        <CardImg
          style={{ width: '25%' }}
          src={`${film.posterUrl}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{`"${film.nameRu}", ${film.year}`}</CardTitle>
          {film.countries.map((el, i) => {
            if (film.countries.length - 1 === i) {
              return <CardSubtitle>{el.country}</CardSubtitle>;
            } else {
              return <CardSubtitle>{`${el.country}, `}</CardSubtitle>;
            }
          })}
          <CardText>
            
          </CardText>
          <Button>Добавить</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
}
