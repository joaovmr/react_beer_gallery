import React,{useState} from 'react';
import Beers from './HomeContent/Beers';
import Header from './HomeContent/Header';
import '../../style/home.css'

const Home = () => {
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

export default Home