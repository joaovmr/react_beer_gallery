import styled from 'styled-components'
import img from '../../../../images/fundo.jpg'

export const ModalVisual = styled.div`
    position: fixed; 
    z-index: 1; 
    padding-top: 10rem; 
    top: 0;
    width: 100% ;
    height: 100% ;
    overflow: auto ;
    background-color: rgb(0,0,0) ;
    background-color: rgba(0,0,0,0.4) ;
`;

export const ModalContent = styled.div` 
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    background-image: url('${img}');
    margin: auto;
    padding: 20px;
    padding-top: 5rem;
    height: 170%;
    width: 90%;
    color: #000;

    img{
        width: 40%;
        height: 50%;
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const CartPrice = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    font-size: 1rem;
    text-align: center;
    position: absolute;
    top: 10rem;
    h1{
        color:#000;
    }
    button{
        color:#000;
    }
`;

export const NoItems = styled.h1`
    color:#fff;
`;