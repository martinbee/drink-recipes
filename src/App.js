import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import IngredientSearch from './components/IngredientSearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IngredientSearch />
      </div>
    );
  }
}

export default App;
