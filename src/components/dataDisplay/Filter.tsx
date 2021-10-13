interface IProps {
    textoInput:string;
    setTextoInput: any;
}

const Filter: React.FC<IProps> = ({textoInput, setTextoInput})=> {

    const handleChange = (e:any) => {
    }
    return(
    <>
        <form>
            <input type="radio" id="padrao" name="escolhas" onChange = {handleChange}/>
              <label>Padrão</label> 
            <input type="radio" id="acid" name="escolhas"/>
              <label >Cerveja Mais Ácida</label> 
            <input type="radio" id="lessAcid" name="escolhas"/>
              <label >Cerveja Menos Ácida</label>
            <input type="radio" id="expensive" name="escolhas"/>
              <label >Cerveja Mais Cara</label>
            <input type="radio" id="cheap" name="escolhas"/>
              <label >Cerveja Mais Barata</label>
        </form>
        <input type="text" id= "search" value = {textoInput} 
        onChange = {(e) => setTextoInput(e.target.value)}/>
    </>
    )
}

export default Filter