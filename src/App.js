import React, { Component } from 'react';
import './App.css';
import CardsList from './Containers/CardsList';
import ScoresHeader from './Containers/ScoresHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Matching Memory Game</h1>
        </header>

        <ScoresHeader />

        <CardsList/>
      </div>
    );
  }
}

export default App;
