import React from 'react';
import { Helmet } from 'react-helmet';

import CardsList from '../Components/CardsList';
import useFetchUrl from '../hooks/useFetchUrl';
import '../assets/styles/views.css';

function PointOfInterest(props) {
  const { longitude, latitude, token } = props;

  const [response, isFetch, isErr] = useFetchUrl(
    `/v1/reference-data/locations/pois/?longitude=${longitude}&latitude=${latitude}&radius=15`,
    token
  );

  return isErr ? (
    <p>something went wrong pls refresh</p>
  ) : (
    <div>
      <Helmet>
        <title>Places to see | CloseToYou</title>
      </Helmet>
      <h1 className="title">What to do here ? </h1>
      <h3 className="sub-title">Top 25 locations to go close to you ! </h3>
      {!isFetch ? (
        <p className="text-center">Loading ...</p>
      ) : (
        <CardsList {...props} pois={response.data} />
      )}
    </div>
  );
}

export default PointOfInterest;
