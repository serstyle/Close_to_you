import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../assets/styles/home.css';

export default function Home() {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Home | CloseToYou</title>
      </Helmet>
      <div className="header">
        <div className="transparency"></div>
        <div className="header-inside">
          <div>
            <h1>Welcome to CloseToYou</h1>
            <div className="btn-container">
              <Link to="/hotel" className="btn">
                Find a hotel
              </Link>
              <Link to="/poi" className="btn">
                Visit your city
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div>
          <h2>Don't know where to sleep tonight ?</h2>
          <Link to="/hotel">
            Find hotels for tonight at 30km around you by clicking{' '}
            <span style={{ color: 'blue' }}>here</span>
          </Link>
        </div>
        <div>
          <h2>Don't know what to do tonigh ?</h2>
          <Link to="/poi">
            Find top 10 activities around your location by clicking{' '}
            <span style={{ color: 'blue' }}>here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
