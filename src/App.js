import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
  state = {
    persons: [
      {name: "Aldwin", age: 18},
      {name: "Ivan", age: 16},
      {name: "Pia", age: 3}
    ],
    showPersons: false
  };

  nameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({persons: [
      {name: newName, age: 28},
      {name: "Ivan Luke", age: 26},
      {name: "Pia Marjorie", age: 13}
    ]});
  };

  changeNameHandler = (e) => {
    // console.log('Was clicked!');
    this.setState({persons: [
      {name: 'Aldwin Benitez', age: 28},
      {name: e.target.value, age: 26},
      {name: 'Pia Marjorie', age: 13}
    ]});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({ persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return <Person 
            key={i}
            click={() => this.deletePersonHandler(i)}
            name={person.name} 
            age={person.age} 
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I'm a brand spanking new React App!</h1>
        <p>This is really working!</p>

        <button 
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;