import React,{useState} from 'react';
import Beers from './Beers';
import Header from './Header';


const App = () => {
    const [textoInput, setTextoInput] = useState('');
    const [checkedButton,setCheckedButton] = useState('')
    return(
        <>
            <Header textoInput = {textoInput} 
            setTextoInput = {setTextoInput}
            checkedButton = {checkedButton}
            setCheckedButton = {setCheckedButton}
            />
            <Beers textoInput = {textoInput}
            checkedButton = {checkedButton}
            />
        </>
    )
}

export default App