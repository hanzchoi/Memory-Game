import React from 'react';
import Card from '../Components/Card'

const CardsList = ({cards}) => {
  let lock = false;
  let fClick = null;
  let sClick = null;
  let cardOne = null;
  let cardTwo = null;


  const cardSelected = (card, cardName) => {
    // console.log(card);
    // console.log(cardName);

    if (fClick === null && sClick === null){
      fClick = cardName;
      cardOne = card;
      console.log(fClick);
      console.log(cardOne);
    }else if(fClick !== null && sClick === null){
      sClick = cardName;
      cardTwo = card;
      console.log(sClick);
      console.log(cardTwo);
    }
    card.classList.add('open')
    card.classList.add('show')

  }

  //Map through the array and render the cards
  const renderCards = () => {
    return cards.map((card, i) => <Card key={i} card={card} cardSelected={cardSelected}/>)
  }

  return (
    <ul className="deck" id="card-deck">
      {renderCards()}
    </ul>
  )
}

export default CardsList;
