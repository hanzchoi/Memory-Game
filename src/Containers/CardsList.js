import React from 'react';
import Card from '../Components/Card'

const CardsList = ({cards}) => {
  let lock = false;
  let fClick = null;
  let sClick = null;
  let cardOne = null;
  let cardTwo = null;

  const restartSelection = () => {
      fClick = null;
      sClick = null;
  }

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

      if(fClick === sClick) {
        cardOne.classList.add('match');
        cardOne.classList.add('true');

        cardTwo.classList.add('match');
        cardTwo.classList.add('true');

      }else {
        cardOne.classList.add('unMatch');
        cardTwo.classList.add('unMatch');
        setTimeout(() => {
          cardOne.classList.remove('unMatch');
          cardOne.classList.remove('show');
          cardOne.classList.remove('open');

          cardTwo.classList.remove('unMatch');
          cardTwo.classList.remove('show');
          cardTwo.classList.remove('open');
        },750)
      }
      restartSelection();
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
