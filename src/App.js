import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
  const [ personsState, setPersonsState ] = useState({
    persons: [
        {name: "Aldwin", age: 18},
        {name: "Ivan", age: 16},
        {name: "Pia", age: 3}
      ]
    });

    const nameHandler = () => {
      // console.log('Was clicked!');
      setPersonsState({persons: [
        {name: "Maximilian", age: 28},
        {name: "Ivan", age: 26},
        {name: "Pia", age: 13}
      ]});
    };

    return (
      <div className="App">
        <h1>Hello, I'm a brand spanking new React App!</h1>
        <p>This is really working!</p>
        <button onClick={nameHandler} >Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >My brothers are Ivan and Aldwin.</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;

// state = {
//   persons: [
//     {name: "Aldwin", age: 18},
//     {name: "Ivan", age: 16},
//     {name: "Pia", age: 3}
//   ]
// }