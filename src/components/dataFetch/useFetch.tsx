import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url : string) => {
  const [beers, setBeers] = useState([]);

  const getBeers = useCallback(async () => {
    const response = await fetch(url);
    const beers = await response.json();
    setBeers(beers);
  }, [url]);

  useEffect(() => {
    getBeers();
  }, [url, getBeers]);
  return {beers};
};