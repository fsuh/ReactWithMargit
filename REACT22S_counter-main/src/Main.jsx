import React, { Component } from 'react';
import Button from './Button';

import './Main.css';

class Main extends Component {
  state = {
    counter: 0,
  };

  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 }); 
  };
  removeOneHandler = () => {
    if (this.state.counter <=0){
      return this.setState({counter: this.state.counter = 0})
    }
    return this.setState({ counter: this.state.counter - 1 });
  };
  removeFiveHandler = () => {
    if(this.state.counter <=4){
      return this.setState({counter: 0})
    }
    return this.setState({ counter: this.state.counter - 5 });
  };

  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  render() {
    let circleClass = '';

    this.state.counter ===0
    ?(circleClass = 'circle')
    :this.state.counter % 2 === 0
    ?(circleClass = 'cicle even')
    :(circleClass = 'circle 0dd')
    return (
      <main>
        <div>
          <h1 className={circleClass}>{this.state.counter}</h1>
          <Button click={this.addFiveHandler}>Add five</Button> 
          <Button click={this.addOneHandler}>Add One</Button> 
          <Button click={this.removeOneHandler}>Remove one</Button> 
          <Button click={this.removeFiveHandler}>Remove Five</Button> 
          <Button click={this.resetHandler}>Reset</Button> 
        </div>
      </main>
    );
  }
}

export default Main;
