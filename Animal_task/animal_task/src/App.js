import React, {Component, useDebugValue} from 'react';
import './App.css';
import Cards from './Cards'
import {animals} from './animals';


class App extends Component{
  state ={
    animals: animals,
    search:""
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name);
  
    this.setState({animals:updatedArray})
  };

  addHandler = (name) => {
    this.setState(state => {
      const updatedArray = state.animals.map((animal) => {
        if(animal.name === name) {
          return {...animal, likes: animal.likes + 1};
        } else {
          return animal;
        }

      });
      return {
        animals: updatedArray,
      };
    });
  };

  searchHandler = event => {
    this.setState({search: event.target.value})
  }

  render(){

    const animalFilter = this.state.animals.filter((animal)=> {
      return animal.name.includes(this.state.search)
    })

    const animalList =animalFilter.map((animal) => {
      return (
        <Cards 
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          removeCard={() =>this.removeHandler(animal.name)}
          addLikes={() =>this.likesHandler(animal.name)}
          reduceLikes={() =>this.likesHandler(animal.name)}
        />
      )
    })

    return (
      <div className="App">
        <h1> {this.state.animals.length} Animals</h1>
        <input type='text' placeholder='search animal' onChange={this.searchHandler}/>
        <div className="animalList">{animalList}</div>
      </div>

    )
  }
}


export default App;
