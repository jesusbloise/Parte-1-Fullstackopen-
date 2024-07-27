import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log('Fetching data');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Data fetched');
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name}: {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
