import React, { Component } from 'react';
import './App.css';

// Components
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    persons: [
      {id: 'laka1', name: "Aldwin", age: 18},
      {id: 'tsls1', name: "Ivan", age: 16},
      {id: 'vsls1', name: "Pia", age: 3}
    ],
    showPersons: false,
    text: '',
    textNum: 0
  };

  nameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({persons: [
      {name: newName, age: 28},
      {name: "Ivan Luke", age: 26},
      {name: "Pia Marjorie", age: 13}
    ]});
  };

  changeNameHandler = (e, id) => {
    // console.log('Was clicked!');
    const personIndex = this.state.persons.findIndex(cur => cur.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons});
  }

  changeTextHandler = (e) => {
    this.setState({textNum: e.target.value.length, text: e.target.value});
  }

  removeLetterHandler = (i) => {
    const textArr = [...this.state.text.split('')];
    textArr.splice(i, 1);
    const newText = textArr.join('');
    this.setState({text: newText, textNum: newText.length});
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
            key={person.id}
            click={() => this.deletePersonHandler(i)}
            name={person.name} 
            age={person.age} 
            changed={(e) => this.changeNameHandler(e, person.id)}
            />
          })}
        </div>
      );
    }

    let characters = this.state.text.split('').map((cur, i) => {
      return <CharComponent letter={cur} key={i} click={() => this.removeLetterHandler(i)} />;
    });

    return (
      <div className="App">
        <h1>Hello, I'm a brand spanking new React App!</h1>
        <div>
          {characters}
        </div>
        <input onChange={this.changeTextHandler} type='text' value={this.state.text} />
        <Validation min={5} textLen={this.state.textNum} />
        <p><em>Text Number: </em>{this.state.textNum}</p>

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