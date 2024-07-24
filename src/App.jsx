//No definir componentes dentro de los componentes
import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // const [value, setValue] = useState(10)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const setToValue = (newValue) => {
  //   console.log('value now', newValue) //imprime el nuevo valor en la consola
  //   setValue(newValue)
  // }
  const setToGood = (newValue) => {
    console.log('value now', newValue)
    setGood(newValue)
  }
 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=> setToGood(good + 1)} text='good' />
      <Button handleClick={()=>setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={()=>setBad(bad + 1)} text='bad'/>
      <h2>statisties</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}
export default App
//hasta aqui
