import React, { Component } from 'react';
import './App.css';
import CardsList from './Containers/CardsList';
import ScoresHeader from './Containers/ScoresHeader'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards:[]
    }
  }

  componentDidUpdate(){
    this.setState(
      { cards: ['fa-anchor', 'fa-anchor', 'fa-bicycle',  'fa-bolt', 'fa-cube', 'fa-diamond', 'fa-diamond', 'fa-plane', 'fa-leaf', 'fa-bomb', 'fa-leaf', 'fa-bomb', 'fa-bolt', 'fa-bicycle', 'fa-plane', 'fa-cube']}
    )
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Matching Memory Game</h1>
        </header>

        <ScoresHeader />

        <CardsList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
