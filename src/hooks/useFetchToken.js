import { useEffect, useState } from 'react';

export default function useFetchToken() {
  const [token, setToken] = useState('');
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_LINK_PROD}/v1/security/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: process.env.REACT_APP_API_KEY_SECRET_PROD,
    })
      .then(res => res.json())
      .then(data => {
        setToken(data.access_token);
      });
  }, []);
  return token;
}
