//No definir componentes dentro de los componentes
import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const setToGood = (newValue) => {
    console.log('value now', newValue)
    setGood(newValue)
  }
  const setToNeutral = (newValue) => {
    console.log('value now', newValue);
    setNeutral(newValue);
  };

  const setToBad = (newValue) => {
    console.log('value now', newValue);
    setBad(newValue);
  };
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

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
      <p>total {total}</p>
      <p>average {average.toFixed(2)}</p>
      <p>positive {positivePercentage.toFixed(2)}%</p>
    </div>
  )
}
export default App
//hasta aqui
