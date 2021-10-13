import React,{useState} from 'react';
import Beers from './Beers';
import Header from './Header';


const App = () => {
    const [textoInput, setTextoInput] = useState('');
    return(
        <>
            <Header textoInput = {textoInput} 
            setTextoInput = {setTextoInput}/>
            <Beers textoInput = {textoInput}/>
        </>
    )
}

export default App