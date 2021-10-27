import styled, { keyframes } from 'styled-components'
import { BeerProps } from '../../../components/dataBuild/VisualInterfaces';

const fadeIn = keyframes`
from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.95);
    opacity: 0.8;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.95);
    opacity: 0.8;
  }
`;

export const Beer = styled.div<BeerProps>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: 22%;
    height: 41rem;
    margin-bottom: 1rem;
    background-color: #F6C101;
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    animation: ${props => props.isActive ? fadeOut : fadeIn} 0.7s linear;
    transition: visibility 1s linear;
`;


