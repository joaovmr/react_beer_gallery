import { MiddleProps } from '../../dataBuild/Interfaces'
import AddItem from './AddItem'
import RemoveItem from './RemoveItem'

const Middle = ({food_pairing, isModal = false}:MiddleProps) => {
    return(
      <>
      <span className = 'conteudo'>
        <h1>Combines with:</h1>
        <ul>
          <li>{food_pairing[0]}</li>
          <li>{food_pairing[1]}</li>
          <li>{food_pairing[2]}</li>
        </ul>
      </span>
      {isModal ? 
      <div className = 'btns'>
      <AddItem></AddItem>
      <RemoveItem></RemoveItem>
      </div> 
      : null}
      </>
    )
}

export default Middle