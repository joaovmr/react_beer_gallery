export class Beer{
    id:number
    name:string;
    food_pairing:string;
    tagline:string;
    ph:number;
    preco:number;
    estoque:number;
    constructor(id:number,
      name:string,
      food_pairing:string,
      tagline:string,
      ph:number,
      ibu:number) {
      this.id = id
      this.name = name;
      this.food_pairing = food_pairing;
      this.tagline = tagline;
      this.ph = ph;  
      this.preco = ibu;
      this.estoque = ph;
    }
  }

  export default Beer;