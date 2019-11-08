import React, { Component } from 'react';
import styles from './App.module.css';

// Components
import Persons from '../components/Persons/Persons';
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
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            change={this.changeNameHandler} />
        </div>
      );

      btnClass = styles.Red;
    }

    let characters = this.state.text.split('').map((cur, i) => {
      return <CharComponent letter={cur} key={i} click={() => this.removeLetterHandler(i)} />;
    });

    let classes = [];

    if(this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if(this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
        <div className={styles.App}>
          <h1>Hello, I'm a brand spanking new React App!</h1>
          <p className={classes.join(' ')} >This is really working!</p>
          {/* <div>
            {characters}
          </div>
          <input onChange={this.changeTextHandler} type='text' value={this.state.text} />
          <Validation min={5} textLen={this.state.textNum} />
          <p><em>Text Number: </em>{this.state.textNum}</p> */}

          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;