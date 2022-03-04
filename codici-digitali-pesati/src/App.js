import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    count: 0
  }

  constructor(){
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log("constructor called");

  }

  handleIncrement(operator){
    console.log("Increment clicked!" + this.state.count);
    this.setState(
      {
        count : this.state.count+1
      }
    )
  }

  render() { 
    return (
      <div className="App">
        <span className='count'>{this.formatCount()}</span>
        <span className='text'>hello there</span><button className='incrementer' onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count
  }
}

export default App;