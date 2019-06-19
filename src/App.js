import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import useFetchToken from './hooks/useFetchToken';

// views
import PointOfInterest from './views/PointOfInterest';
import Hotels from './views/Hotels';
import Home from './views/Home';

// components
import Navbar from './Components/Navbar';
// styles
import './App.css';

function App() {
  const [lat, setLat] = useState('59.287712500000005');
  const [long, setLong] = useState('18.08951');
  const [date, setDate] = useState('');
  const token = useFetchToken();
  function success(pos) {
    const crd = pos.coords;
    setLat(`${crd.latitude}`);
    setLong(`${crd.longitude}`);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    const todayTime = new Date();
    const month = todayTime.getMonth() + 1;
    const day =
      todayTime.getDate() < 10
        ? `0${todayTime.getDate()}`
        : todayTime.getDate();
    const year = todayTime.getFullYear();
    setDate(`${year}-${day}-${month}`);
  }, [lat, long]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          path="/hotel"
          render={props =>
            token && (
              <Hotels
                {...props}
                latitude={lat}
                longitude={long}
                date={date}
                token={token}
              />
            )
          }
        />
        <Route
          path="/poi"
          render={props =>
            token && (
              <PointOfInterest
                {...props}
                latitude={lat}
                longitude={long}
                token={token}
              />
            )
          }
        />
      </div>
    </Router>
  );
}

export default App;
