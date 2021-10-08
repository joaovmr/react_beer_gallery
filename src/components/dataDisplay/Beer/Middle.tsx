interface PropsMiddle{
    food_pairing:string
}

const Middle = ({food_pairing}:PropsMiddle) => {
    return(
      <span className = 'conteudo'>
        <h1>Combines with:</h1>
        <ul>
          <li>{food_pairing[0]}</li>
          <li>{food_pairing[1]}</li>
          <li>{food_pairing[2]}</li>
        </ul>
        <p id = "qtd"></p>
      </span>
    )
}

export default Middle