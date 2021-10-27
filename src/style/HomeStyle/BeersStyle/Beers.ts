import styled from 'styled-components'
import img from '../../../images/fundo.jpg'

export const BeersVisual = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1rem;
    background-image: url('${img}');
    min-height: 84vh;
    img {
        width: 40%;
        height: 50%;
        margin-top: 2%;
        margin-left: auto;
        margin-right: auto;
    }
`;