interface IProps {
    textoInput:string;
    setTextoInput: any;
    checkedButton: string;
    setCheckedButton:any
}

const Filter: React.FC<IProps> = ({textoInput, setTextoInput,checkedButton, setCheckedButton})=> {


    return(
    <>
        <select onChange = {(e) => {
            const selected = e.target.value
            setCheckedButton(selected)
        }}>
            <option value = "padrao">Padrão</option>
            <option value = "acid">Mais Ácida</option>
            <option value = "lessAcid">Menos Ácida</option>
            <option value = "expensive">Mais Cara</option>
            <option value = "cheap">Mais Barata</option>
        </select>
        <input type="text" id= "search" value = {textoInput} 
        onChange = {(e) => setTextoInput(e.target.value)}/>
    </>
    )
}

export default Filter