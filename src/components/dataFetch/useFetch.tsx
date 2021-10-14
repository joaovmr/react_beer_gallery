import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url : string) => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBeers = useCallback(async () => {
    const response = await fetch(url);
    let beers = await response.json();
    setBeers(beers);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getBeers();
  }, [url, getBeers]);
  return {loading, beers};
};