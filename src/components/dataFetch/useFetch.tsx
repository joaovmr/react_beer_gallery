import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url : string) => {
  const [beers, setBeers] = useState([]);

  const getBeers = useCallback(async () => {
    const response = await fetch(url);
    let beers = await response.json();
    beers = beers.filter((beer:any) =>{
      return beer.ph > 0 && beer.ph !== null && beer.ibu > 0 && beer.ibu !== null
    })
    setBeers(beers);
  }, [url]);

  useEffect(() => {
    getBeers();
  }, [url, getBeers]);
  return {beers};
};