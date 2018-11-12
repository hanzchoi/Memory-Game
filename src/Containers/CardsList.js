import React, { Component } from 'react';
import Card from '../Components/Card'
import './CardsList.css';

class CardsList extends Component {

  render(){
    console.log(this.props.cards);
    return (
      <ul className="deck" id="card-deck">

      </ul>
    )
  }
}

export default CardsList;
