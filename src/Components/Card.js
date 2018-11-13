import React, { Component } from 'react';

class Card extends Component {
  render(){
    const card = this.props.card
    console.log(this.props.card);
    return (
      <li className="card">
        <i className={`fa ${card}`}/>
      </li>
    )
  }
}

export default Card
