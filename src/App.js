import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Shuffle from './shuffling'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shuffle />
      </div>
    );
  }
}

export default App;
