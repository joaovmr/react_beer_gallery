import { IFilterProps } from '../../../dataBuild/HeaderInterfaces'

const Filter = ({textoInput, setTextoInput, setCheckedButton}: IFilterProps)=> {


    return(
    <>
        <select onChange = {(e) => {
            const selected = e.target.value
            setCheckedButton(selected)
        }}>
            <option value = "padrao">Standart</option>
            <option value = "acid">Highest pH</option>
            <option value = "lessAcid">Lowest pH</option>
            <option value = "expensive">Expensivest</option>
            <option value = "cheap">Cheapest</option>
        </select>
        <input type="text" id= "search" value = {textoInput} 
        onChange = {(e) => setTextoInput(e.target.value)}/>
    </>
    )
}

export default Filter