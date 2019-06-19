import React from 'react';
import '../assets/styles/card.css';

export default function Card({
  name,
  category,
  latitude,
  longitude,
  geoCode,
  tags,
}) {
  return (
    <div className="card-component">
      <h1 className="card-title">
        <a
          alt="title_description_link"
          href={`https://www.google.com/search?q=${name}`}
        >
          {name}
        </a>
      </h1>
      <p>Category : {category}</p>

      <p className="tags">description tags: {tags.join(', ')}</p>
      <div>
        <a
          className="link_outside"
          alt="how_to_go_link"
          href={`https://www.google.com/maps/dir/${latitude},+${longitude}/${geoCode.latitude},+${geoCode.longitude}/`}
        >
          See how to go
        </a>
        <a
          className="link_outside"
          alt="description_link"
          href={`https://www.google.com/search?q=${name}`}
        >
          More information
        </a>
      </div>
    </div>
  );
}
