interface PropsTop{
    name:string
  }
  
const Top = ({name}:PropsTop) => {
  return (
  <div className = 'colarinho'>
      <h1>{String(name)}</h1>
  </div>
  )
}

export default Top