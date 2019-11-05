import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  
  state = {
    persons: [
      {name: "Aldwin", age: 18},
      {name: "Ivan", age: 16},
      {name: "Pia", age: 3}
    ]
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello, I'm a brand spanking new React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.nameHandler('Aldwin Benitez')} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.changeNameHandler}
          />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={() => this.nameHandler('Karl Ymana')} 
        >My brothers are Ivan and Aldwin.</Person>
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;