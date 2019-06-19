import React from 'react';
import '../assets/styles/card.css';
import contactIcon from '../assets/icons/call.png';
import distanceIcon from '../assets/icons/road.png';

export default function Card({
  name,
  currency,
  price,
  distance,
  distanceUnit,
  contact,
  latitude,
  longitude,
  hotelLat,
  hotelLong,
}) {
  return (
    <div className="card-component">
      <h1 className="card-title">{name}</h1>
      <div>
        <p>
          {currency} {price}
        </p>
        <p>
          <img className="icon" alt="distance_icon" src={distanceIcon} /> :
          {distance} {distanceUnit}
        </p>
        <p>
          <img className="icon" alt="contact_icon" src={contactIcon} /> :
          {contact}
        </p>
      </div>
      <a
        className="link_outside"
        alt="how_to_go_hotel_link"
        href={`https://www.google.com/maps/dir/${latitude},+${longitude}/${hotelLat},+${hotelLong}/`}
      >
        See how to go
      </a>
    </div>
  );
}
