import React from 'react';
import CardHotel from './CardHotel';
import '../assets/styles/cardsList.css';

export default function CardsList(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const card = props.hotels.data
    .slice(0, 25)
    .map((hotel, i) => (
      <CardHotel
        {...props}
        key={i}
        name={hotel.hotel.name}
        price={hotel.offers[0].price.total}
        currency={hotel.offers[0].price.currency}
        distance={hotel.hotel.hotelDistance.distance}
        distanceUnit={hotel.hotel.hotelDistance.distanceUnit}
        contact={hotel.hotel.contact ? hotel.hotel.contact.phone : 'no phone'}
        hotelLat={hotel.hotel.latitude}
        hotelLong={hotel.hotel.longitude}
      />
    ));

  return <div className="cardList-component">{card}</div>;
}
