import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //lowercase is reserved for jsx, so custom components are upper case

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>jsx is javascript that gets compiled to createElement's</h1>
        <p>This is a paragraph</p>
        <button>Switch Name</button>
        <Person name="James" age="35" hobbies="sky diving" /> 
        <Person name="Johnson" age="75"/> 
        <Person name="Harrison" age="20"/> 
        <Person name="Ringo" age="101"/> 
        <Person name="Starr" age="36">My hobbies are: RACING!!</Person> 
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Is this working?'));
    //this createElement is the same as using JSX but much harder so we just use JSX
  }
}

export default App;
