import { useEffect, useState } from 'react';

export default function useFetchUrl(url, token) {
  const [response, setResponse] = useState({});
  const [isFetch, setIsFetch] = useState(false);
  const [isErr, setIsErr] = useState(false);
  useEffect(() => {
    setIsFetch(false);
    fetch(process.env.REACT_APP_API_LINK_PROD + url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(resp => {
        setResponse(resp);
        if (resp.data) {
          setIsFetch(true);
          setIsErr(false);
        }
      })
      .catch(err => {
        setIsFetch(false);
        setIsErr(true);
      });
  }, [token, url]);
  return [response, isFetch, isErr];
}
