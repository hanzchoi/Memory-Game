import React, { Component } from 'react';
import Card from '../Components/Card'

class CardsList extends Component {

  //Map through the array and render the cards
  renderCards = () => {
    return this.props.cards.map((card, i) => <Card key={i} card={card}/>)
  }

  render(){
    //console.log(this.props.cards);
    return (
      <ul className="deck" id="card-deck">
        {this.renderCards()}
      </ul>
    )
  }
}

export default CardsList;
