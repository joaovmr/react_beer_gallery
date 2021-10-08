import '../../../style/style.css'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'

interface Beer {
    beer:any
} 


const Card = ({ beer }:Beer) => {
  return (
    <div key={beer.id} className = 'breja'>
        <Top {...beer}></Top>
        <img src = {beer.image_url} alt = {beer.name}></img>
        <Middle {...beer}></Middle>
        <Bottom {...beer}></Bottom>
    </div>
  );
};

// export function montagem(beer:any, div:any){
//   const breja = new Breja(beer);
//   const card = new Card();
//   let btn = document.createElement('button');
//   btn.id = "add"
//   btn.innerHTML = `+`
//   adicionar(btn)
//   card.img.src = image_url;
//   card.colarinho.innerHTML = `<h1 class = "title">${breja.nome}</h1>`; 
//   card.span.innerHTML = `<p class = "middle">Goes with: ${breja.vaiBem}</p><p id = "qtd"></p>`
//   card.fundo.innerHTML = `<p class = "bottom">
//   <span class = "slogan">${breja.slogan}</span> 
//   <span>Preço: $<span id = 'preco'>${breja.preco}</span> </span> 
//   <span>pH: ${breja.ph}</span> 
//   <span>Em estoque: ${breja.estoque}</span>
//   </p>`
//   catalogo.newItem(breja.nome,String(breja.vaiBem),breja.slogan,breja.preco,breja.ph,breja.estoque)
//   append(card.div,btn);
//   append(card.div, card.colarinho);
//   append(card.div, card.img);
//   append(card.div, card.span);
//   append(card.div, card.fundo);
//   append(div, card.div);
// }

export default Card;
