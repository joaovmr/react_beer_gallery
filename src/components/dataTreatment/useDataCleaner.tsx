export const useDataCleaner = (loading:boolean, beers:any) => {
    let cleanedBeers:any
    if(loading === false){

    cleanedBeers = beers.filter((beer:any) =>{
        return beer.ph > 0 && beer.ph !== null && beer.ibu > 0 && beer.ibu !== null
      })
    
    }
    return { cleanedBeers }
};