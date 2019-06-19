import React from 'react';
import Card from './Card';
import '../assets/styles/cardsList.css';

export default function CardsList(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const card = props.pois
    .slice(0, 25)
    .map((poi, i) => (
      <Card
        {...props}
        key={i}
        name={poi.name}
        tags={poi.tags}
        category={poi.category}
        geoCode={poi.geoCode}
      />
    ));

  return <div className="cardList-component">{card}</div>;
}
