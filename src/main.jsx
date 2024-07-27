// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
// })

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   console.log(notes)
// })

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

// import ReactDOM from 'react-dom/client'
// import axios from 'axios'
// import App from './App'

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
// })

import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);