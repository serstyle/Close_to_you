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
        console.log('res ', resp);
      })
      .catch(err => {
        setIsFetch(false);
        setIsErr(true);
        console.log('err', err);
      });
  }, [token, url]);
  return [response, isFetch, isErr];
}
