const Hello = (props) => {
  console.log (props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
const App = () => {
  const amigos = ['Peter', 'Maya']
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={20 + 10}/>
      <Hello name={name} age={age} />
      <p>{amigos + ' '}</p>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <Footer/>
    </>
  )
}
export default App
