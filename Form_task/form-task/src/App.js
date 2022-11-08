import React, { Component } from 'react';
import './App.css';
import View from './components/View';
import Form from './components/Form';


export class App extends Component {
  render() {
    return (
      <div className='form'>
      <h1>React Form Task</h1>
      <Form />
      <View />
      </div>
    )
  }
}

export default App;