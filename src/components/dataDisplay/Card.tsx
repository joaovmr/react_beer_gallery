import React from 'react';
import '../../style/style.css'

interface Props {
    name:string
    image_url:string
}

const Beer = ({ image_url, name}:Props) => {
  return (
    <div className = 'breja'>
        <div className = 'colarinho'></div>
        <img src = {image_url} alt = {name}></img>
        <span className = 'conteudo'></span>
        <div className = 'fundo'></div>
    </div>
  );
};

function append(parent: HTMLElement, el: HTMLElement) {
    return parent.appendChild(el);
}

// function montagem(beer:any, div:any){
//     let btn = document.createElement('button');
//     btn.id = "add"
//     btn.innerHTML = `+`
//     card.img.src = beer.image_url;
//     card.colarinho.innerHTML = `<h1 class = "title">${breja.nome}</h1>`; 
//     card.span.innerHTML = `<p class = "middle">Goes with: ${breja.vaiBem}</p><p id = "qtd"></p>`
//     card.fundo.innerHTML = `<p class = "bottom">
//     <span class = "slogan">${breja.slogan}</span> 
//     <span>Preço: $<span id = 'preco'>${breja.preco}</span> </span> 
//     <span>pH: ${breja.ph}</span> 
//     <span>Em estoque: ${breja.estoque}</span>
//     </p>`
//     append(card.div,btn);
//     append(card.div, card.colarinho);
//     append(card.div, card.img);
//     append(card.div, card.span);
//     append(card.div, card.fundo);
//     append(div, card.div);
// }


export default Beer;
