import React, { Component } from 'react';
import styles from './App.module.css';

// Components
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Validation from '../components/Validation/Validation';
import CharComponent from '../components/CharComponent/CharComponent';

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

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            change={this.changeNameHandler} />;
    }

    let characters = this.state.text.split('').map((cur, i) => {
      return <CharComponent letter={cur} key={i} click={() => this.removeLetterHandler(i)} />;
    });

    return (
        <div className={styles.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}  
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;