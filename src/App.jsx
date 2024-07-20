
// aqui le metimos javaScript y lo dejamos en la consola
import React from 'react';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  // Calcular el total de ejercicios
  const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;
  console.log('Total de ejercicios:', totalExercises);

  return null; // No renderizamos nada en la interfaz
};

export default App;
// hasta aqui

//parte 
//Titulo con su nombre en forma de props
// const course = 'Half Stack application development'
// const Header = (props) => {
//   console.log(props)
//   return (
//     <>
//       <h1>Titulo del curso {course}</h1>
//     </>
//   )
// }
//parte y ejercicios de un forma 
// const Content = (props) => {
//   console.log(props)
//   return (
//     <>
//      <p>
//         {props.part1} {props.exercises1}
//         {props.part2} {props.exercises2}
//         {props.part3} {props.exercises3}
//       </p>
//     </>
//   )
// }
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   const Total = (props) => {
//   console.log(props)
//   return (
//     <>
//      <p>
//       Number of exercises {exercises1+exercises2+exercises3}
//       </p>
//     </>
//   )
// }
// const App = () => {
//     // parte y ejercicio de otra forma
//    const Content = [
//       {part1:'Fundamentals of React', exercises1:10},
//       {part2:'Using props to pass data', exercises2:7},
//       {part3:'State of a component', exercises3:14}
//    ]

//   return (
//     <div>
//       <Header course={course} />
//       {/* <Content part1={part1} exercises1={exercises1}/>
//       <Content part2={part2} exercises2 ={exercises2}/>
//       <Content part3={part3} exercises3 ={exercises3}/> */}
//       <p>{Content[0].part1} {Content[0].exercises1}</p>
//       <p>{Content[1].part2} {Content[1].exercises2}</p>
//       <p>{Content[2].part3} {Content[2].exercises3}</p>
//       <Total Total={Total}/>

//     </div>
//   )
// }
// export default App



// esto para abajo son ejemplos 
// const Hello = (props) => {
//   console.log (props)
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }
// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
//     </div>
//   )
// }
// const App = () => {
//   const amigos = ['Peter', 'Maya']
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]
//   const name = 'Peter'
//   const age = 10
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={20 + 10}/>
//       <Hello name={name} age={age} />
//       <p>{amigos + ' '}</p>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//       <Footer/>
//     </>
//   )
// }
// export default App
