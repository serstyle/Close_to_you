/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import useFetchUrl from '../hooks/useFetchUrl';
import CardListHotels from '../Components/CardListHotels';
import '../assets/styles/views.css';

export default function Hotels(props) {
  const { latitude, longitude, date, token } = props;
  const [sort, setSort] = useState('PRICE');
  const [response, isFetch, isErr] = useFetchUrl(
    `/v2/shopping/hotel-offers?latitude=${latitude}&longitude=${longitude}&checkInDate=${date}&roomQuantity=1&adults=1&radius=30&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=${sort}`,
    token
  );

  return isErr ? (
    <p>something went wrong pls refresh</p>
  ) : (
    <div>
      <Helmet>
        <title>Hotels | CloseToYou</title>
      </Helmet>
      <h1 className="title">Where to sleep tonight ?</h1>
      <h3 className="sub-title">
        25 {sort === 'PRICE' ? 'cheapest hotels close' : 'closest hotels'} to
        you
      </h3>

      <label htmlFor="sort-select" className="select-label" id="label-select">
        Sort by:{' '}
      </label>
      <select
        onChange={e => setSort(e.target.value)}
        className="select-sort"
        id="sort-select"
      >
        <option value="PRICE">Price</option>
        <option value="DISTANCE">Distance</option>
      </select>
      {!isFetch ? (
        <div>
          <p className="text-center">Loading ...</p>
          <p className="text-light text-center">It may takes few seconds</p>
        </div>
      ) : (
        <CardListHotels {...props} hotels={response} />
      )}
    </div>
  );
}
