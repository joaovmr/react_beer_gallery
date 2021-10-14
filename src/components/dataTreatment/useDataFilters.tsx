const max = function(prev: { ph: number; }, current: { ph: number; }) {
return (prev.ph > current.ph) ? prev : current
}


const min = function(prev: { ph: number; }, current: { ph: number; }) {
return (prev.ph < current.ph) ? prev : current
}

const maxv = function(prev: { ibu: number; }, current: { ibu: number; }) {
return (prev.ibu > current.ibu) ? prev : current
}

const minv = function(prev: { ibu: number; }, current: { ibu: number; }) {
return (prev.ibu < current.ibu) ? prev : current
}

export const useDataFilters = (loading:boolean,cleanedBeers:any) => {
    
    let maisAcida
    let menosAcida
    let maisCara
    let menosCara
    if(loading === false){
        maisAcida = cleanedBeers.reduce(max)
        menosAcida = cleanedBeers.reduce(min)
        maisCara = cleanedBeers.reduce(maxv)
        menosCara = cleanedBeers.reduce(minv)

    }
    return {maisAcida,menosAcida,maisCara,menosCara}
}

