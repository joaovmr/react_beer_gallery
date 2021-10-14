interface IProps {
    textoInput:string;
    setTextoInput: any;
    checkedButton: string;
    setCheckedButton:any
}

const Filter: React.FC<IProps> = ({textoInput, setTextoInput,checkedButton, setCheckedButton})=> {

    return(
    <>
        <form>
            <input type="radio" id="padrao" name="escolhas" value = {checkedButton} 
            onChange = {(e) => setCheckedButton(e.target.id)}/>
              <label>Padrão</label> 
            <input type="radio" id="acid" name="escolhas"
            onChange = {(e) => setCheckedButton(e.target.id)}/>
              <label >Cerveja Mais Ácida</label> 
            <input type="radio" id="lessAcid" name="escolhas"
            onChange = {(e) => setCheckedButton(e.target.id)}/>
              <label >Cerveja Menos Ácida</label>
            <input type="radio" id="expensive" name="escolhas"
            onChange = {(e) => setCheckedButton(e.target.id)}/>
              <label >Cerveja Mais Cara</label>
            <input type="radio" id="cheap" name="escolhas"
            onChange = {(e) => setCheckedButton(e.target.id)}/>
              <label >Cerveja Mais Barata</label>
        </form>
        <input type="text" id= "search" value = {textoInput} 
        onChange = {(e) => setTextoInput(e.target.value)}/>
    </>
    )
}

export default Filter