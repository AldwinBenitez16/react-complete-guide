import React, { Component } from 'react';
import './App.css';

// Components
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: ['Aldwin']
  }

  usernameHandler(e) {
    this.setState({
      username: [e.target.value]
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username[0]} />
        <UserOutput username={this.state.username[0]} />
        <UserOutput username={this.state.username[0]} /> 
        <UserInput username={this.state.username[0]} changed={this.usernameHandler.bind(this)} />
      </div>
    );
  }
}

export default App;
