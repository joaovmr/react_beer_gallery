import { useFetch } from '../dataFetch/useFetch';
import Card from './Beer/Card'
import '../../style/style.css'
import background from '../../images/fundo.jpg'
// import { Beer } from './components/dataBuild/Beer'

const url = 'https://api.punkapi.com/v2/beers'

function Beers() {
  const { beers }:any = useFetch(url)
  console.log(beers)
  return (
    <div>
      <section className='brejas'>
        {beers.map((beer:any) => {
          return <Card key={beer.id} beer = {beer} />
        })}
      </section>
    </div>
  )
}

export default Beers;
